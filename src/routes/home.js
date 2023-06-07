import { layout } from '../template.js';
import logo from '../routes/components/logo.js';

// testing purposes
import { getAvgRatings } from '../model/interactions.js';

export function get(req, res) {
  const avg = getAvgRatings();
  console.log({ avg });
  const title = `ಥ_ಥ`;
  const content = /*html*/ `
    <div class="home-container">
    ${logo('login')}
    <h1>${avg}</h1>
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
    <button class="btn btn__login">Login w/ Github</button>
    </div>`;

  const response = layout({ title, content });

  res.send(response);
}
