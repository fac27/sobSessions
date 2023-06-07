import { getClient } from "./api.js";

const VALIDATE_URL = `https://api.github.com/applications/${getClient().id}/token`;



export async function middleware(req, res, next) {
  function hasCookies(object){
    let bool = true
    if (!object?.name || !object?.refresh_token || !object?.access_token) bool = false 
    return bool
  }
  const hasCookies = hasCookies(req.signedCookies);
  // if (
  //   !req.signedCookies?.name ||
  //   !req.signedCookies?.refresh_token ||
  //   !req.signedCookies?.access_token
  // )
  if (!hasCookies) return next();

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
      .then((json) => {
        console.log(json.valid)
        return json.valid})
      .catch((error) => console.log(error));
  }
  const isValidToken = await validateToken();
  console.log("line 28: " + isValidToken)
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