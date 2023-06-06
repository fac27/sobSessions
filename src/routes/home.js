import {layout} from "../template.js";
import logo from "../routes/components/logo.js";

export function get(req, res){
    const title = `ಥ_ಥ`
    const content = /*html*/`
    <div class="home-container">
    ${logo("login")}
    <div class="home-content-container">
    <h1>Top 10 songs to cry to...</h1>
    <div>
    <ul class="places-list">
        <li>...in the bath</li>
        <li>...at the park</li>
        <li>...at the movies</li>
    </ul>
    </div>
    </div>
    <button class="btn btn__login">Login w/ Github</button>
    </div>`

    const response = layout({title, content});

    res.send(response);
};