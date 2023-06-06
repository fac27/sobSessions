import { layout } from "../template.js";
import header from "./components/header.js";
import iframe from "./components/iframe.js";
import { getAllSongs } from "../model/songs.js";



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

export function get(req, res) {
  const title = `Top 10`;
  const songsArr = getAllSongs();
  const songs = songsArr.map((song) => {
    //const commentsArr = getSongComments(song.id);
    return /*html*/ `
        <div class="song-container flex">
        <div class="player-container">
        <p class="song--info">Song #${song.id}. ${song.artist}- ${song.title}</p>
        ${iframe(song.url)}
        </div>
        <div class="comment-container">
        ${commentsArr.map((comment) => {
          return /*html*/ `
            <div>
            <p>${comment.rating}</p>
            <p>${comment.comment}</p>
            </div>`;
        })}
        </div>
        </div>
        `;
  });
  const content = /*html*/ `
    ${header()}
    ${songs}
    `;

  const response = layout({ title, content });

  res.send(response);
}
