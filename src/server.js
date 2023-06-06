import express from "express";
import cookieParser from "cookie-parser";
// import serverMiddleware from "./session.js";
import { getHome } from "./routes/home.js";
import { getSongs } from "./routes/songs.js";
import dotenv from "dotenv";
dotenv.config();

const server = express();

const bodyParser = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

server.use(express.static("public"));

server.use(cookies);

// server.use(serverMiddleware);

server.get("/", getHome);
server.get("/songs", getSongs);

export default server;
