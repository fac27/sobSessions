export default function stars(number) {
  const goldStars = number;
  const greyStars = 5 - number;
  let rating = ``;

  for (let i = 0; i < goldStars; i++) {
    rating += `<i class="fa-solid fa-star" style="color: #d7a63c;" aria-hidden="true"></i>`;
  }
  for (let i = 0; i < greyStars; i++) {
    rating += `<i class="fa-solid fa-star" style="color: #636363;" aria-hidden="true"></i>`;
  }
  return `<figure aria-label="song rated ${number} star${
    number > 1 ? 's' : ''
  }">${rating}</figure>`;
}
