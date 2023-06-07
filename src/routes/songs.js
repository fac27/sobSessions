import { layout } from '../template.js';
import header from './components/header.js';
import songsHTML from './components/songsHTML.js';
import { getAllSongs } from '../model/songs.js';

export function get(req, res) {
  console.log('session is valid for songs? :', req.sessionIsValid);
  if (!req.sessionIsValid) return res.redirect('/');
  const title = `Top 10`;
  const songsArr = getAllSongs();
  const songs = songsHTML(songsArr);
  const content = /*html*/ `
    ${header()}
    <h1> ${req.signedCookies.name} </h1>
    <main class="all-songs-container">
    ${songs}
    </main>
    `;

  const response = layout({ title, content });

  res.send(response);
}
