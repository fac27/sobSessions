import { layout } from '../template.js';
import header from './components/header.js';
import songsHTML from './components/songsHTML.js';
import { getAllSongs } from '../model/songs.js';

export function get(req, res) {
  const title = `Top 10`;
  const songsArr = getAllSongs();
  const songs = songsHTML(songsArr);
  const content = /*html*/ `
    ${header()}
    <main class="all-songs-container">
    ${songs}
    </main>
    `;

  const response = layout({ title, content });

  res.send(response);
}
