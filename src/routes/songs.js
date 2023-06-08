import { layout } from '../template.js';
import header from './components/header.js';
import { getAllSongs } from '../model/songs.js';
import { createInteraction } from '../model/interactions.js';
import songsHTML from './components/songsHTML.js';

export function get(req, res) {
  if (!req.sessionIsValid) return res.redirect('/');
  const title = `Top 10`;
  const songsArr = getAllSongs();
  const songs = songsHTML(songsArr);
  const content = /*html*/ `
    ${header()}
    <h1> ${req.signedCookies.name} </h1>
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
