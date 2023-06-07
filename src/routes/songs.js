import { layout } from '../template.js';
// import { getAllSongs, getSongId } from '../model/songs.js';
import { getAllSongs } from '../model/songs.js';
import { createInteraction } from '../model/interactions.js';
import header from './components/header.js';
import songsHTML from './components/songsHTML.js';

export function get(_, res) {
  const title = `Top 10`;
  const songsArr = getAllSongs();
  const songs = songsHTML(songsArr);
  const content = /*html*/ `
    ${header()}
    ${songs}
    
    `;

  const response = layout({ title, content });

  res.send(response);
}

export function post(req, res) {
  const { comment, rating, song_id } = req.body;
  const interaction = { song_id, rating, comment };
  createInteraction(interaction);
  res.redirect('/songs');
}
