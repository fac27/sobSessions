import { query } from 'express';
import * as api from '../api.js';

// this is the route GitHub redirects users back to after the log in
// there'll be a ?code=xxx search params provided by GH for us to use
// we need to POST this code to GH to get an access_token for talking to their API

export default function auth(req, res) {
  const code = req.query.code;
  api
    .getToken(code)
    .then(api.getUser)
    .then((user) => {
      res.cookie('refresh_token', user.refresh_token, {
        httpOnly: true,
        signed: true,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: 'lax',
      });
      res.cookie('access_token', user.access_token, {
        httpOnly: true,
        signed: true,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: 'lax',
      });
      res.cookie('name', user.login, {
        httpOnly: true,
        signed: true,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: 'lax',
      });
      res.redirect('/');
    })
    .catch(() => res.redirect('/'));
}
