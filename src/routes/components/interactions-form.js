export default function interactionsForm() {
  return /*html*/ `
    <form method="POST" action="/songs">
      <label for="comment"></label>
      <input name="comment"/>

      <label for="rating"></label>
      <input name="rating" type="range" min="0" max="5"/>

      <button type="submit">Submit</button>
    </form>
  `;
}
