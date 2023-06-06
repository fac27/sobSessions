import {layout} from "../template.js";

export function getHome(req, res){
    const title = `ಥ_ಥ`
    const content = /*html*/`
    <div class="home-container">
    <div class="logo logo--login">
    <p class="logo-text--login">ಥ_ಥ</p>
    </div>
    <div class="home-content-container">
    <h1>Top 10 songs to cry to...</h1>
    <div class="places">
    <ul>
        <li>...in the bath</li>
        <li>...at the park</li>
        <li>...at the movies</li>
    </ul>
    </div>
    </div>
    <button>Login w/ Github</button>
    </div>`

    const response = layout({title, content});

    res.send(response);
};