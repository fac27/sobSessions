import { getSongInteraction } from '../../model/interactions.js';
import iframe from './iframe.js';
import { stars, starRating } from './stars.js';
import interactionsForm from './interactions-form.js';

function formatNumber(num) {
  let n = Number(num.toFixed(2));
  return parseFloat(n);
}

export default function songsHTML(songsArr, name) {
  return songsArr
    .map(song => {
      const commentsArr = getSongInteraction(song.id);
      return /*html*/ `
        <div class="song-container">
        <div class="player-container">
        ${iframe(song.url)}
        <p>Average rating: ${starRating(formatNumber(song.avg_rating))} ${formatNumber(song.avg_rating)}</p>
        </div>
        <div class="comments-container">
        ${commentsArr
          .map(comment => {
            return /*html*/ `
            <div class="comment">
            <div class="comment-overline">
            <p class="margin-block-start-0 margin-block-end-0 user-name">user_name</p>
            ${stars(comment.rating)}
            </div>
            <p class="margin-inline-start-05">${
              comment.comment
                ? comment.comment
                : '<span class="emoji" role="img" aria-label="user left no comment">&#129296;<span>'
            }</p>
            </div>`;
          })
          .join('')}
          ${interactionsForm(song.id, name)}
        </div>
        </div>
        `;
    })
    .join('');
}
