import { getClient } from "./api.js";

const VALIDATE_URL = `https://api.github.com/applications/${getClient().id}/token`;

export async function middleware(req, res, next) {
  if (
    !req.signedCookies?.name ||
    !req.signedCookies?.refresh_token ||
    !req.signedCookies?.access_token
  )
    return next();

  // either store access_tokens in db with an expiry or check valid access token with fetch
  async function validateToken() {
    const body = {access_token: req.signedCookies.access_token};
    return await fetch(VALIDATE_URL, {
      method: 'POST',
      headers: {
        accept: 'application/vnd.github+json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => json.valid);
  }
  const isValidToken = await validateToken();
  console.log(isValidToken)
  if (!isValidToken) {
    console.log('invalid token', isValidToken);
    logout(req, res);
    return next();
  } 
  return next();
}

function logout(req, res) {
  console.log('logging out');
  res.clearCookie('refresh_token');
  res.clearCookie('access_token');
  res.clearCookie('name');
  res.redirect('/');
}
