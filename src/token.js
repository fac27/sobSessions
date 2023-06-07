export function middleware(req, res, next) {
  if (
    !req.signedCookies?.name ||
    !req.signedCookies?.refresh_token ||
    !req.signedCookies?.access_token
  )
    return next();

  // either store acces_tokens in db with an expiry or check valid access token with fetch

  // const user = req.signedCookies.user;
  console.log(req.signedCookies);
  // if (user) {
  //   logout(req, res);
  //   return next();
  // } else {
  req.session = req.signedCookies;
  // }
  return next();
}

function logout(req, res) {
  console.log('logging out');
  res.clearCookie('refresh_token');
  res.clearCookie('access_token');
  res.clearCookie('user');
  res.redirect('/');
}
