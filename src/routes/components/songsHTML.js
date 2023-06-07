import iframe from "./iframe.js";
import stars from "./stars.js";
import interactionsForm from "./interactions-form.js";

const commentsArr = [
  {
    id: 1,
    git_user_id: 1,
    song_id: 1,
    rating: 5,
    comment: "I cried to this so much!!",
  },
  {
    id: 2,
    git_user_id: 1,
    song_id: 1,
    rating: 3,
    comment: "Not that great to cry to :|",
  },
  {
    id: 2,
    git_user_id: 1,
    song_id: 1,
    rating: 2,
    comment: "I barely cried at all",
  },
];

export default function songsHTML(songsArr) {
  return songsArr
    .map((song) => {
      return /*html*/ `
        <div class="song-container flex">
        <div class="player-container">
        <p class="song--info">
        Song #${song.id}. ${song.artist}- ${song.title}</p>
        ${iframe(song.url)}
        </div>
        <div>
        ${commentsArr
          .map((comment) => {
            return /*html*/ `
            <div class="comment">
            <p class="margin-block-end-0">${stars(comment.rating)}</p>
            <p class="margin-block-start-0">${comment.comment}</p>
            </div>`;
          })
          .join("")}
          ${interactionsForm(song.id)}
        </div>
        </div>
        `;
    })
    .join("");
}
