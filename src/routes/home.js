export function get(req, res) {
  const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`;
  const user = req.signedCookies?.user;
  if (user) {
    res.send(`<h1>Welcome ${user.login}</h1>`);
  } else {
    res.send(`
      <h1>Welcome</h1>
      <a href="${LOGIN_URL}">Log in with GitHub</a>
    `);
  }
}

// import { layout } from "../template.js";

// export function getHome(req, res) {
//   const title = `ಥ_ಥ`;
//   const content = /*html*/ `
//     <div class="logo logo--login">
//     <p>ಥ_ಥ</p>
//     </div>
//     <h1>Top 10 songs to cry to...</h1>
//     <div>
//     <ul>
//         <li>...in the bath</li>
//         <li>...at the park</li>
//         <li>...at the movies</li>
//     </ul>
//     </div>
//     <button>Login w/ Github</button>`;

//   const response = layout({ title, content });

//   res.send(response);
// }
