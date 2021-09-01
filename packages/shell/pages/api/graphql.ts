import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import request from 'utils/request';

export default withApiAuthRequired(async function graphql(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  try {
    const data = await request(req, res);
    res.json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
