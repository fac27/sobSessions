import express from "express";
import cookieParser from "cookie-parser";
import * as token from "./token.js";
import auth from "./routes/auth.js";
import * as home from "./routes/home.js";
import * as songs from "./routes/songs.js";

import dotenv from "dotenv";
dotenv.config({ path: process.cwd() + "/.env" });

const server = express();

const bodyParser = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

server.use(express.static("public"));

server.use(cookies);

server.use(token.middleware);

server.get("/authentication", auth);
server.get("/", home.get);
server.get("/songs", songs.get);

export default server;
