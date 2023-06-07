import db from "../database/db.js";

const insert_interaction = db.prepare(/*sql*/ `
  INSERT into interactions (song_id, rating, comment)
  VALUES ($song_id, $rating, $comment)
`);

export function createInteraction(interaction) {
  insert_interaction.run(interaction);
  return [interaction];
}
