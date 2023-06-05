const express = require('express');
const cookieParser = require('cookie-parser');
const home = require('./routes/home.js');

require('dotenv').config();

const server = express();

const bodyParser = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

server.use(express.static('public'));

server.use(cookies);

server.use((req, res, next) => {
  if (!req.signedCookies?.sid) {
    console.timeEnd('v2.0 server');
    return next();
  }
  const sid = req.signedCookies.sid;
  const session = getSession(sid);
  const isExpired = new Date() > new Date(session.expires_at);

  if (isExpired) {
    deleteSession(sid);
    res.clearCookie('sid');
  } else {
    req.session = session;
  }
  console.timeEnd('v2.0 server');
  return next();
});

server.get('/', home.get);

module.exports = server;
