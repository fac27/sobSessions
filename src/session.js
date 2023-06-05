export default function sessionMiddleware(req, res, next) {
  if (!req.signedCookies?.sid) return next();

  const sid = req.signedCookies.sid;
  const session = getSession(sid);
  const isExpired = new Date() > new Date(session.expires_at);

  if (isExpired) {
    deleteSession(sid);
    res.clearCookie('sid');
  } else {
    req.session = session;
  }
  return next();
}
