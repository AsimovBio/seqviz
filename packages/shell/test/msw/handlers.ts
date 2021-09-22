import { graphql } from 'msw';
import { part } from 'test/__mocks__/parts';

import { construct } from '../__mocks__/construct';
import { folder } from '../__mocks__/folder';

export const handlers = [
  graphql.query(/Folders?/, (req, res, ctx) => {
    return res(
      ctx.data({
        folder: [folder],
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

  graphql.mutation('UpdateFolder', (req, res, ctx) => {
    return res(
      ctx.data({ update_folder_by_pk: { ...folder, name: 'New folder' } })
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
        insert_construct_part: {
          returning: construct,
        },
      })
    );
  }),
];
