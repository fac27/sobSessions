import { getSongInteraction } from '../../model/interactions.js';
import iframe from './iframe.js';
import stars from './stars.js';
import interactionsForm from './interactions-form.js';

export default function songsHTML(songsArr) {
  return songsArr
    .map(song => {
      const commentsArr = getSongInteraction(song.id);
      return /*html*/ `
        <div class="song-container flex">
        <div class="player-container">
        <p class="song--info">
        Song #${song.id}. ${song.artist}- ${song.title}</p>
        ${iframe(song.url)}
        </div>
        <div>
        ${commentsArr
          .map(comment => {
            return /*html*/ `
            <div class="comment">
            <p class="margin-block-end-0">${stars(comment.rating)}</p>
            <p class="margin-block-start-0">${
              comment.comment
                ? comment.comment
                : '<span class="emoji" role="img" aria-label="user left no comment">&#129296;<span>'
            }</p>
            </div>`;
          })
          .join('')}
          ${interactionsForm(song.id)}
        </div>
        </div>
        `;
    })
    .join('');
}
