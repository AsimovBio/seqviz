import { getAccessToken, getSession } from '@auth0/nextjs-auth0';
import { GraphQLClient } from 'graphql-request';
import { getSdkWithHooks } from 'models/graphql';

const gqlEndpoint = new URL(
  '/api/graphql',
  process.env.NEXT_PUBLIC_FEDERATED_URL_SHELL
).toString();

// Proxy type-safe calls to the local (serverless) endpoint
export const proxyClient = new GraphQLClient(gqlEndpoint);
export const sdk = getSdkWithHooks(proxyClient);

// Create an auth-aware client for requests to the Hasura API
const client = new GraphQLClient(process.env.GRAPHQL_API_URL);

export default async function request(req, res) {
  const { query, variables } = req.body;
  try {
    const { accessToken } = await getAccessToken(req, res);

    if (!accessToken) {
      throw new Error('invalid session!');
    }

    client.setHeader('authorization', `Bearer ${accessToken}`);
  } catch (err) {
    if (err?.error_description === 'Unknown or invalid refresh token.') {
      const session = getSession(req, res);
      delete session.refreshToken;
    } else {
      return Promise.reject(err.message);
    }
  }

  return client.request(query, variables);
}
