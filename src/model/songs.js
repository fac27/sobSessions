import db from "../database/db.js";

const select_all_songs = db.prepare(/*sql*/ `
  SELECT
  id,
  title,
  artist,
  url
  FROM songs
  `);

export function getAllSongs() {
  return select_all_songs.all();
};

const select_song_by_id = db.prepare(/*sql*/ `\
SELECT id, title, artist, url FROM songs WHERE id = ?
`);

export function selectSongById(id) {
  return select_song_by_id.get(id)
};





