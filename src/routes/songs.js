import { layout } from '../template.js';
import { getAllSongs, getSongId } from '../model/songs.js';
import { createInteraction } from '../model/interactions.js';
import interactionsForm from './components/interactions-form.js';
import header from './components/header.js';
import songsHTML from './components/songsHTML.js';

export function get(_, res) {
  const title = `Top 10`;
  const songsArr = getAllSongs();
  const songs = songsHTML(songsArr);
  const content = /*html*/ `
    ${header()}
    ${songs}
    ${interactionsForm()}
    `;

  const response = layout({ title, content });

  res.send(response);
}

export function post(req, res) {
  const { comment, rating } = req.body;
  // const selected_song = // song id argument needs to come from the song the user has selected // for now, 1 is a placeholder
  const song_id = getSongId(1).id;
  const created_at = new Date().toLocaleTimeString('en-GB');

  const interaction = { song_id, rating, comment, created_at };
  const create_interaction = createInteraction(interaction);
}
