const VALIDATE_URL = 'https://api.github.com/applications/validate_token';

export async function middleware(req, res, next) {
  if (
    !req.signedCookies?.name ||
    !req.signedCookies?.refresh_token ||
    !req.signedCookies?.access_token
  )
    return next();

  // either store access_tokens in db with an expiry or check valid access token with fetch
  async function validToken() {
    const body = req.signedCookies;
    return await fetch(VALIDATE_URL, {
      method: 'post',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => json.valid);
  }

  if (!(await validToken())) {
    logout(req, res);
    return next();
  } else {
    req.session = req.signedCookies;
  }
  return next();
}

function logout(req, res) {
  console.log('logging out');
  res.clearCookie('refresh_token');
  res.clearCookie('access_token');
  res.clearCookie('user');
  res.redirect('/');
}
