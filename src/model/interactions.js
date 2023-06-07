import db from '../database/db.js';

const get_avg_ratings = db.prepare(/*sql*/ `
SELECT id, AVG(rating) AS avg
FROM interactions`);

export function getAvgRatings() {
  const avgRatings = get_avg_ratings.get();
  console.log(avgRatings);
  return avgRatings;
}

const insert_interaction = db.prepare(/*sql*/ `
  INSERT into interactions (song_id, rating, comment, created_at)
  VALUES ($song_id, $rating, $comment, $created_at)
`);

export function createInteraction(interaction) {
  insert_interaction.run(interaction);
  return [interaction];
}
