import fetch from 'node-fetch';

import dotenv from 'dotenv';
dotenv.config({ path: process.cwd() + '/.env' });

export const getClient = () => {
  return {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  };
};

const TOKEN_URL = 'https://github.com/login/oauth/access_token';

export function getToken(code) {
  console.log('initial ' + client_id);

  const body = {
    client_id: getClient().id,
    client_secret: getClient().secret,
    code,
  };
  console.log(body);
  return fetch(TOKEN_URL, {
    method: 'POST',
    body: JSON.stringify(body),
    // IMPORTANT: THESE HEADERS ARE REQUIRED
    // GH will do weird 404 errors if you don't specify exactly what data type you're sending
    headers: { accept: 'application/json', 'content-type': 'application/json' },
  }).then(getJson);
}

const USER_URL = 'https://api.github.com/user';

export function getUser(response) {
  return fetch(USER_URL, {
    headers: {
      accept: 'application/json',
      authorization: `token ${response.access_token}`,
    },
  })
    .then(async (res) => {
      if (res.status !== 401) return res;
      const res2 = await refreshToken(res);
      if (res2.status === 401) throw new Error('Refresh token failed');
      return res2;
    })
    .then(getJson())
    .then((json) => {
      return { ...response, ...json };
    })
    .catch(() => res.redirect('/'));
}

function getJson(response) {
  if (!response.ok) {
    console.log(response);
    const error = new Error('HTTP Error');
    error.status = response.statusCode;
    throw error;
  }
  return response.json();
}

const REFRESH_URL = 'https://github.com/login/oauth/access_token';

export function refreshToken(response) {
  console.log('refresh ' + client_id);
  const body = {
    client_id: getClient().id,
    client_secret: getClient().secret,
    refresh_token: response.refresh_token,
    grant_type: 'refresh_token',
  };
  return fetch(REFRESH_URL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(getJson());
}
