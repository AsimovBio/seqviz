import { GraphQLClient } from 'graphql-request';
import {
  getAccessToken,
  getSession,
  withApiAuthRequired,
} from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = Record<string, any>;

export const client = new GraphQLClient(process.env.GRAPHQL_API_URL);

async function graphql(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { query, vars } = req.body;

  try {
    const { idToken } = await getSession(req, res);

    if (!idToken) {
      throw new Error('invalid session!');
    }

    client.setHeader('authorization', `Bearer ${idToken}`);

    const data = await client.request(query, vars);
    console.log(data);

    res.json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

export default withApiAuthRequired(graphql);
