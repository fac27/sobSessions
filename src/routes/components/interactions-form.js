export default function interactionsForm(id) {
  return /*html*/ `
    <form method="POST" action="/songs">
    <div>
      <input name="song_id" value=${id} hidden />
      <label for="comment"></label>
      <input name="comment"/>

      <label for="rating"></label>
      <input name="rating" type="range" min="0" max="5"/>
    </div>
      <button type="submit">Submit</button>
    </form>
  `;
}
