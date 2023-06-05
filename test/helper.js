const DIR = 'src';

import server from `../${DIR}/server.js`;
import db from `../${DIR}/database/db.js`;
import { getUser, createUser } from `../${DIR}/model/user.js`;
import { getSession, createSession } from `../${DIR}/model/session.js`;
import { getEntries, createEntry } from `../${DIR}/model/entries.js`;

module.exports = {
  reset,
  db,
  createUser,
  getUser,
  createSession,
  getSession,
  createEntry,
  getEntries,
  request,
  get_sid,
};

function reset() {
  db.exec(/*sql*/ `
    DELETE FROM entries;
    DELETE FROM sessions;
    DELETE FROM users;
    DELETE FROM sqlite_sequence WHERE name IN ('entries', 'sessions', 'users');
  `);
}

async function request(pathname, options = {}) {
  const app = server.listen(0);
  const { port } = app.address();
  const url = new URL(pathname, `http://localhost:${port}`);
  options.headers = { ...options.headers, connection: 'close' };
  const response = await fetch(url, options);
  app.close();
  const body = await response.text();
  const headers = Object.fromEntries(response.headers);
  return { status: response.status, body, headers };
}

function get_sid(headers) {
  const [sid_cookie] = headers['set-cookie'].split('.');
  const encoded_sid = sid_cookie.replace('sid=s%3A', '');
  //   req.signedCookie('sid')
  return decodeURIComponent(encoded_sid);
}
