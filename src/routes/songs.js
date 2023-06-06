import { layout}  from "../template.js";

export function getSongs(req, res){
    const title = `Top 10`
    const content = /*html*/`
    <div class="lockup">
    <p>ಥ_ಥ</p>
    </div>
    <h1>Top 10 songs to cry to...</h1>
    <h2>...After you've dropped ur sandwich</h2>
    <button>Logout</button>`

    const response = layout({title, content});

    res.send(response);
};