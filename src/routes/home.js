const client_id = process.env.CLIENT_ID;

const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${client_id}`;

export function get() {
  const user = req.signedCookies.user;
  if (user) {
    res.send(`
      <h1>Welcome back ${user}</h1>
      <form action="/log-out" method="post"><button>Log out</button></form>
    `);
  } else {
    res.send(`
      <h1>Welcome</h1>
      <a href="${LOGIN_URL}">Log in with GitHub</a>
    `);
  }
}
