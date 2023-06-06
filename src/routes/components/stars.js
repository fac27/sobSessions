export default function stars(number) {
  let goldStars = number;
  let greyStars = 5 - number;
  let rating = ``;

  for (let i = 0; i < goldStars; i++) {
    rating += `<i class="fa-solid fa-star" style="color: #d7a63c;"></i>`;
  }
  for (let i = 0; i < greyStars; i++) {
    rating += `<i class="fa-solid fa-star" style="color: #636363;"></i>`;
  }
  return rating;
}
