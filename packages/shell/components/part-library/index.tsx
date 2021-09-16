import { useActor } from '@xstate/react';
import { DashboardContext } from 'components/layout/dashboard-layout';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { useContext } from 'react';
import type { Column } from 'react-table';
import { useSortBy, useTable } from 'react-table';
import { sdk } from 'utils/request';

const Box: any = dynamic(() => import('common/components/box'));
const Button = dynamic(() => import('common/components/button'));
const CopyToClipboard = dynamic(
  () => import('common/components/copy-to-clipboard')
);
const Icon = dynamic(() => import('common/components/icon'));
const Text = dynamic(() => import('common/components/text'));

export default function PartsLibrary() {
  const {
    state: {
      children: { partLibSvc },
    },
  } = useContext(DashboardContext);

  const [_, send] = useActor<any, any>(partLibSvc);

  const { data, error } = sdk.useParts('Parts', null);

  if (error) {
    console.error(error);
  }

  const partsData = useMemo(() => data?.part || [], [data]);

  const columns = useMemo<Column[]>(
    () => [
      {
        accessor: 'type',
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
            <Box>
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
            </Box>
          );
        },
        Header: 'Name',
      },
      {
        accessor: 'type.name',
        Header: 'Type',
      },
      {
        accessor: 'sequence_length',
        Header: 'Length (bp)',
      },
      {
        accessor: 'description',
        disableSortBy: true,
        Cell({ value }) {
          return (
            <Box
              css={{
                display: '-webkit-box',
                '-webkit-line-clamp': 1,
                '-webkit-box-orient': 'vertical',
                overflow: 'hidden',
                whiteSpace: 'normal',
              }}
              title={value}
            >
              {value}
            </Box>
          );
        },
        Header: 'Description',
      },
      {
        accessor: 'sequence',
        disableSortBy: true,
        Cell({ value }) {
          return (
            <Box>
              <CopyToClipboard text={value?.toUpperCase()}>
                <Box
                  color="transparent"
                  css={{
                    maxWidth: '20rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textTransform: 'uppercase',
                  }}
                >
                  {value}
                </Box>
              </CopyToClipboard>
            </Box>
          );
        },
        Header() {
          return (
            <Text
              css={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              DNA Sequence&nbsp;
              <Box
                as="span"
                css={{
                  svg: {
                    height: '$0',
                    width: '$0',
                    path: { fill: '$mutedText' },
                  },
                }}
                title="Click sequence to copy"
              >
                <Icon label="Copy" />
              </Box>
            </Text>
          );
        },
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
          padding: '$1 $3',
          textAlign: 'left',
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
                    whiteSpace: 'nowrap',
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
                <Box
                  as="td"
                  css={{ whiteSpace: 'nowrap' }}
                  key={index}
                  {...cell.getCellProps()}
                >
                  {cell.render('Cell')}
                </Box>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Box>
  );
}
