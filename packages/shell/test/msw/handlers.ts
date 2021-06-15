import { graphql } from 'msw';
import project from '../__mocks__/project';

export const handlers = [
  graphql.query('ProjectsQuery', (req, res, ctx) => {
    return res(
      ctx.data({
        project,
      })
    );
  }),
];
