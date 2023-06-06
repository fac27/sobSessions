export function middleware(req, res, next) {
  if (!req.signedCookies?.token) return next();

  const cookie = req.signedCookies.token;

  // check token is valid on github auth otherwise get refresh_token

  // const isExpired = new Date() > new Date(session.expires_at);
  if (isExpired) {
    logout(req, res);
    return next();
  } else {
    const parts = cookie.split('=');
    req.session = { ...parts };
  }
  return next();
}

function logout(req, res) {
  res.clearCookie('refresh_token');
  res.clearCookie('access_token');
  res.clearCookie('user');
  res.redirect('/');
}
