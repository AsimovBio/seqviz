import { graphql } from 'msw';
import { part } from 'test/__mocks__/parts';

import { construct } from '../__mocks__/construct';
import { project } from '../__mocks__/project';

export const handlers = [
  graphql.query(/Projects?/, (req, res, ctx) => {
    return res(
      ctx.data({
        project: [project],
      })
    );
  }),
  graphql.query(/Constructs?/, (req, res, ctx) => {
    return res(
      ctx.data({
        construct: [construct],
      })
    );
  }),
  graphql.query(/Parts?/, (req, res, ctx) => {
    return res(
      ctx.data({
        part: [part],
      })
    );
  }),

  graphql.mutation('UpdateProject', (req, res, ctx) => {
    return res(
      ctx.data({ update_project_by_pk: { ...project, name: 'New project' } })
    );
  }),
  graphql.mutation('UpdateConstruct', (req, res, ctx) => {
    return res(
      ctx.data({
        update_construct_by_pk: { ...construct, name: 'New construct' },
      })
    );
  }),
  graphql.mutation('InsertConstructPart', (req, res, ctx) => {
    return res(
      ctx.data({
        returning: construct,
      })
    );
  }),
];
