import { layout } from '../template.js';
import { getClient } from '../api.js';
import logo from '../routes/components/logo.js';

const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${
  getClient().id
}`;

export function get(req, res) {
  if (req.sessionIsValid) return res.redirect('/songs');
  const title = `ಥ_ಥ`;
  const content = /*html*/ `
    <main>
    <div class="home-container">
    ${logo('login')}
    <h1>Welcome</h1>
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
    </div>
    </main>`;

  const response = layout({ title, content });

  res.send(response);
}
