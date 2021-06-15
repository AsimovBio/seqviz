import { getAccessToken } from '@auth0/nextjs-auth0';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.GRAPHQL_API_URL);

export default async function request(req, res) {
  const { query, variables } = req.body;
  const { accessToken } = await getAccessToken(req, res);

  if (!accessToken) {
    throw new Error('invalid session!');
  }

  client.setHeader('authorization', `Bearer ${accessToken}`);

  return client.request(query, variables);
}
