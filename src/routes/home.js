import { getClient } from '../api.js';

const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${
  getClient().id
}`;

// export function get(req, res) {
//   const user = req?.session?.name;
//   if (user) {
//     res.send(`<h1>Welcome ${user || 'unknown user'}</h1>`);
//   } else {
//     res.send(`
//       <h1>Welcome</h1>
//       <a href="${LOGIN_URL}">Log in with GitHub</a>
//     `);
//   }
// }

import { layout } from '../template.js';
import logo from '../routes/components/logo.js';

export function get(req, res) {
  if (req.sessionIsValid) res.redirect('/songs');
  const title = `ಥ_ಥ`;
  const user = req.signedCookies?.name;
  const content = /*html*/ `
    <div class="home-container">
    ${logo('login')}
    <h1>Welcome ${user || ''}</h1>
    <div class="home-content-container">
    <h1>Top 10 songs to cry to...</h1>
    <div>
    <ul class="places-list">
        <li>...in the bath</li>
        <li>...at the park</li>
        <li>...at the movies</li>
    </ul>
    </div>
    </div>
    <a class="btn btn__login" href="${LOGIN_URL}">Log in with GitHub</a>
    <!-- <button class="btn btn__login">Login w/ Github</button> -->
    </div>`;

  const response = layout({ title, content });

  res.send(response);
}
