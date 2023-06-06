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
}
