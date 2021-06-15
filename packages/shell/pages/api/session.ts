import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function sessionApiRoute(req, res) {
  const session = getSession(req, res);

  res.json(session);
});
