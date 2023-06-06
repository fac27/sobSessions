import { layout } from "../template.js";
import header from "./components/header.js";

const songsArr = [
  { title: "", artist: "", url: "", id: "" },
  { title: "", artist: "", url: "", id: "" },
  { title: "", artist: "", url: "", id: "" },
  { title: "", artist: "", url: "", id: "" },
  { title: "", artist: "", url: "", id: "" },
  { title: "", artist: "", url: "", id: "" },
  { title: "", artist: "", url: "", id: "" },
  { title: "", artist: "", url: "", id: "" },
  { title: "", artist: "", url: "", id: "" },
  { title: "", artist: "", url: "", id: "" },
];

export function get(req, res) {
  const title = `Top 10`;
  //const songsArr = getAllSongs();
  const songs = songsArr.map((song) => {
    return /*html*/ `
        <div>
        <p>${song.artist}</p>
        <p>${song.title}<p>
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
