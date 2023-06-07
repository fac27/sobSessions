import db from '../database/db.js';

const select_all_songs = db.prepare(/*sql*/ `
SELECT
songs.id,
songs.title,
songs.artist,
songs.url,
AVG(interactions.rating) AS avg_rating
FROM songs
JOIN interactions ON songs.id = interactions.song_id
GROUP BY songs.id;
  `);

export function getAllSongs() {
  return select_all_songs.all();
}


