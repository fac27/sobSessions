import { getClient } from './api.js';

const VALIDATE_URL = `https://api.github.com/applications/${
  getClient().id
}/token`;

import dotenv from 'dotenv';
dotenv.config({ path: process.cwd() + '/.env' });

export async function middleware(req, res, next) {
  req.sessionIsValid = true;
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
  if (!hasCookies) {
    req.sessionIsValid = false;
    return next();
  }

  // // either store access_tokens in db with an expiry or check valid access token with fetch
  // async function validateToken() {
  //   const body = { access_token: req.signedCookies.access_token };
  //   console.log({ access_token: req.signedCookies.access_token });
  //   return await fetch(VALIDATE_URL, {
  //     method: 'POST',
  //     headers: {
  //       accept: 'application/vnd.github+json',
  //       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((res) => res.status)
  //     .catch((error) => console.log(error));
  // }
  // const validateTokenResponse = await validateToken();
  // console.log('validate message: ', validateTokenResponse);
  // if (validateTokenResponse == 404) {
  //   console.log('invalid token');
  //   // logout(req, res);
  //   req.sessionIsValid = false;
  //   return next();
  // } else if (validateTokenResponse == 200) {
  //   console.log('valid token');
  //   req.sessionIsValid = true;
  //   return next();
  // } else {
  //   console.log('error', validateTokenResponse);
  //   console.log('req status: ', req.status);
  //   req.sessionIsValid = false;
  //   return next();
  // }
  return next();
}

export function logout(req, res) {
  res.clearCookie('refresh_token');
  res.clearCookie('access_token');
  res.clearCookie('name');
  res.redirect('/');
}
