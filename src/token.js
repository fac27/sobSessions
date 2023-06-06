export function middleware(req, res, next) {
  if (!req.signedCookies?.token) return next();

  const user = req.signedCookies.user;

  if (user) {
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
