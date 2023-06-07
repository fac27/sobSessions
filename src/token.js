import { getClient } from './api.js';
import * as songs from '../src/routes/songs.js';

const VALIDATE_URL = `https://api.github.com/applications/${
  getClient().id
}/token`;

export async function middleware(req, res, next) {
  function checkCookies(object) {
    let bool = true;
    if (!object?.name || !object?.refresh_token || !object?.access_token)
      bool = false;
    return bool;
  }
  const hasCookies = checkCookies(req.signedCookies);
  // if (
  //   !req.signedCookies?.name ||
  //   !req.signedCookies?.refresh_token ||
  //   !req.signedCookies?.access_token
  // )
  if (!hasCookies) return next();

  // either store access_tokens in db with an expiry or check valid access token with fetch
  async function validateToken() {
    const body = { access_token: req.signedCookies.access_token };
    return await fetch(VALIDATE_URL, {
      method: 'POST',
      headers: {
        accept: 'application/vnd.github+json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => json)
      .catch((error) => console.log(error));
  }
  const validateMessage = await validateToken();
  console.log('validate message: ', validateMessage);
  if (validateMessage.status == 404) {
    console.log('invalid token', isValidToken);
    logout(req, res);
    req.sessionIsValid = false;
    return next();
  } else if (validateMessage.status == 200) {
    console.log('valid token', isValidToken);
    req.sessionIsValid = true;
    return next();
  } else {
    console.log('error', validateMessage);
    console.log('req status: ', req.status);
    req.sessionIsValid = false;
    return next();
  }
}

function logout(req, res) {
  console.log('logging out');
  res.clearCookie('refresh_token');
  res.clearCookie('access_token');
  res.clearCookie('name');
  res.redirect('/');
}
