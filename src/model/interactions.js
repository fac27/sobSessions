import db from '../database/db.js';

const get_avg_ratings = db.prepare(/*sql*/ `
SELECT AVG(rating) AS avg
FROM interactions`);

export function getAverageRatings() {
  return get_avg_ratings.get();
}

const insert_interaction = db.prepare(/*sql*/ `
  INSERT into interactions (song_id, rating, comment, created_at)
  VALUES ($song_id, $rating, $comment, $created_at)
`);

export function createInteraction(interaction) {
  insert_interaction.run(interaction);
  return [interaction];
}
