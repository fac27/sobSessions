import fetch from 'node-fetch';

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const TOKEN_URL = 'https://github.com/login/oauth/access_token';

export function getToken(code) {
  const body = { client_id, client_secret, code };
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
    .then((res) => getJson(res))
    .then((json) => {
      return { ...response, ...json };
    });
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
