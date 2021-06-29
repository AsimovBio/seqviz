import { fireEvent } from '@testing-library/react';
import { graphql } from 'msw';
import { Construct } from 'pages/project/[pid]/construct/[cid]';
import { construct } from 'test/__mocks__/construct';
import { project } from 'test/__mocks__/project';
import { server } from 'test/msw/server';
import { render, screen } from 'test/utils';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: { cid: construct.id, pid: project.id },
      asPath: `/project/${project.id}/construct/${construct.id}`,
    };
  },
}));

describe('Construct', () => {
  it('renders without errors', async () => {
    render(<Construct user={{}} />);

    expect(
      await screen.findByDisplayValue('Test construct')
    ).toBeInTheDocument();
  });

  it('calls the API on input change', async () => {
    render(<Construct user={{}} />);

    const inputNode = await screen.findByDisplayValue('Test construct');

    server.use(
      graphql.query('Projects', (req, res, ctx) => {
        return res(
          ctx.data({
            project: [
              {
                ...project,
                project_constructs: [
                  { construct: { ...construct, name: 'New construct' } },
                ],
              },
            ],
          })
        );
      })
    );

    fireEvent.change(inputNode, { target: { value: 'New construct' } });

    expect(await screen.findByText('New construct')).toBeInTheDocument();
  });
});
