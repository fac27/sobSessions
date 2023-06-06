import db from '../database/db.js';

// const insert_interaction = db.prepare(/*sql*/ `
//   INSERT into interactions (id, git_user_id, song_id, rating, comment, created_at)
//   VALUES ($id, $git_user_id, $song_id, $rating, $comment,DATE('now', '+7 days'))
// `);

// function createInteraction(git_user_id) {
//   insert_interaction.run( {some object} );
//   return id
// }

const select_interaction = db.prepare(/*sql*/ `  
  SELECT
  id,
  git_user_id,
  song_id,
  rating,
  comment,
  created_at
  FROM interactions WHERE id = ?
`);

export function getInteraction(id) {
  return select_interaction.get(id)
}
