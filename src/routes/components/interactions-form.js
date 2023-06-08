export default function interactionsForm(id) {
  return /*html*/ `
    <form method="POST" action="/songs" class="input-form">
    <div>
      <input name="song_id" value=${id} hidden />
      <div class="comment-label-container">
      <label for="rating">Rating:</label>
      <input 
        class="rating" 
        value="1" 
        name="rating" 
        type="range" 
        min="0" 
        max="5" 
        oninput="this.style.setProperty('--value', this.value)"
        />
      </div>
    </div>
    <div class="comment-submit-container">
    <div class="comment-label-container">
    <label for="comment">Comment:</label>
    <input name="comment"/>
    </div>
    <button class="btn btn-submit" type="submit">+</button>
    </div>
    </form>
  `;
}
