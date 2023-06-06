import { layout } from "../template.js";

export function getHome(req, res) {
  const title = `ಥ_ಥ`;
  const content = /*html*/ `
    <div class="logo logo--login">
    <p>ಥ_ಥ</p>
    </div>
    <h1>Top 10 songs to cry to...</h1>
    <div>
    <ul>
        <li>...in the bath</li>
        <li>...at the park</li>
        <li>...at the movies</li>
    </ul>
    </div>
    <button>Login w/ Github</button>`;

  const response = layout({ title, content });

  res.send(response);
}
