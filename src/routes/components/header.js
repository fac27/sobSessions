import logo from './logo.js';

export default function header() {
  return /*html*/ `
    <header class="header">
    <div class="header--headings">
    <div class="flex">
    <h1 class="header--h1">Top 10 songs to cry to...</h1>
    ${logo('header')}
    </div>
    <h2 class="header--h2">...After you've dropped ur sandwich</h2>
    </div>
    <button class="btn">Logout</button>
    </header>`;
}
