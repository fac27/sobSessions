import db from '../database/db.js';

const insert_interaction = db.prepare(/*sql*/ `
  INSERT into interactions (song_id, rating, comment)
  VALUES ($song_id, $rating, $comment)
`);

export function createInteraction(interaction) {
  insert_interaction.run(interaction);
  return [interaction];
};

const get_song_interaction = db.prepare(/*sql*/`
  SELECT 
  id, 
  song_id,
  rating,
  comment
  FROM interactions WHERE song_id = ?
  `);

export function getSongInteraction(song_id) {
  return get_song_interaction.get(song_id)
};

