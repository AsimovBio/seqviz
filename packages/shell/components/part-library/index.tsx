import { useActor } from '@xstate/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { DashboardContext } from 'pages';
import { useMemo } from 'react';
import { useContext } from 'react';
import type { Column } from 'react-table';
import { useSortBy, useTable } from 'react-table';
import { sdk } from 'utils/request';

const Box: any = dynamic(() => import('common/components/box'));
const Button = dynamic(() => import('common/components/button'));
const Icon = dynamic(() => import('common/components/icon'));

export default function PartsLibrary({ initialData }) {
  const {
    state: {
      children: { partLibSvc },
    },
  } = useContext(DashboardContext);

  const [state, send] = useActor<any, any>(partLibSvc);

  const { data, error } = sdk.useParts('Parts', null, {
    initialData,
  });

  if (error) {
    console.error(error);
  }

  const partsData = useMemo(() => data?.part || [], [data]);

  const columns = useMemo<Column[]>(
    () => [
      {
        accessor: 'part_type',
        disableSortBy: true,
        Cell({ value }) {
          const { name, glyph } = value;
          return (
            <Box
              css={{
                width: '1.2rem',
                height: '1.2rem',
                backgroundColor: '$background',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                svg: {
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeLinecap: 'square',
                  strokeWidth: '2',
                  width: '0.6rem',
                },
              }}
            >
              <Icon label={name}>
                <Box dangerouslySetInnerHTML={{ __html: glyph }} />
              </Icon>
            </Box>
          );
        },
        Header: '',
      },
      {
        accessor: 'name',
        Cell({
          cell: {
            row: { original: part },
          },
          value,
        }) {
          return (
            <Button
              color="transparent"
              css={{
                cursor: 'pointer',
                display: 'block',
                fontWeight: '$body',
                p: 0,
                textAlign: 'left',
                width: '100%',
              }}
              onClick={() => {
                send({ type: 'SELECT', value: part });
              }}
            >
              <Box as="span">{value}</Box>
            </Button>
          );
        },
        Header: 'Name',
      },
      {
        accessor: 'part_type.name',
        Header: 'Type',
      },
      {
        accessor: 'sequence_length',
        Cell({ value }) {
          return value ? `${value} bp` : '';
        },
        Header: 'Length',
      },
      {
        accessor: 'description',
        disableSortBy: true,
        Cell({ value }) {
          return <Box css={{ maxWidth: '32rem' }}>{value}</Box>;
        },
        Header: 'Description',
      },
      {
        accessor: 'sequence',
        disableSortBy: true,
        Cell({ value }) {
          return (
            <Box
              css={{
                maxWidth: '20rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {value}
            </Box>
          );
        },
        Header: 'DNA Sequence',
      },
    ],
    [send]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: partsData }, useSortBy);

  return (
    <Box
      as="table"
      css={{
        border: `1px solid ${
          state?.value === 'selecting' ? '$primary' : 'transparent'
        }`,
        borderSpacing: '0 0.25em',
        li: { pt: '$2' },
        listStyle: 'none',
        fontSize: '$2',
        m: 0,
        p: 0,
        width: '100%',

        tr: {
          backgroundColor: '$overlay',
        },

        'td, th': {
          border: 'none',
          padding: '$2',
          textAlign: 'left',

          '&:first-of-type': {
            pl: '$3',
          },
          '&:last-of-type': {
            pr: '$3',
          },
        },

        th: {
          color: '$mutedText',
          fontSize: '$1',
          fontWeight: '$body',
          textTransform: 'uppercase',
        },
      }}
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              const { key, ...props } = column.getHeaderProps(
                column.getSortByToggleProps()
              );
              return (
                <Box
                  as="th"
                  css={{
                    verticalAlign: 'middle',
                  }}
                  key={key}
                  {...props}
                >
                  <Box css={{ display: 'flex' }}>
                    <span>{column.render('Header')}</span>
                    <Box as="span" css={{ height: '1em', width: '1em' }}>
                      {column.isSorted && (
                        <Icon
                          label={column.isSortedDesc ? 'CaretUp' : 'CaretDown'}
                        />
                      )}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...props } = row.getRowProps();
          return (
            <tr key={key} {...props}>
              {row.cells.map((cell, index) => (
                <td key={index} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Box>
  );
}
