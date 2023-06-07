import express from "express";
import cookieParser from "cookie-parser";
//// import serverMiddleware from "./session.js";
import * as home from "./routes/home.routes.js";
import * as songs from "./routes/songs.routes.js";

import dotenv from "dotenv";
dotenv.config({ path: process.cwd() + "/.env" });

const server = express();

const bodyParser = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

server.use(express.static("public"));

server.use(cookies);

// server.use(serverMiddleware);

server.get("/", home.get);
server.get("/songs", songs.get);
server.post("/songs", bodyParser, songs.post);

export default server;
