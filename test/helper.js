// const server = require(`../server.js`);
// const db = require(`../database/db.js`);

// function reset() {
//   db.exec(/*sql*/ `
//     DELETE FROM entries;
//     DELETE FROM sessions;
//     DELETE FROM users;
//     DELETE FROM sqlite_sequence WHERE name IN ('entries', 'sessions', 'users');
//   `);
// }

// function get_sid(headers) {
//   const [sid_cookie] = headers['set-cookie'].split('.');
//   const encoded_sid = sid_cookie.replace('sid=s%3A', '');
//   //   req.signedCookie('sid')
//   return decodeURIComponent(encoded_sid);
// }
