<<<<<<< HEAD
import express from 'express';
import cookieParser from 'cookie-parser';
import * as token from './token.js';
import auth from './routes/auth.js';
import * as home from './routes/home.js';
import * as songs from './routes/songs.js';
import dotenv from 'dotenv';
=======
import express from "express";
import cookieParser from "cookie-parser";
//import serverMiddleware from "./session.js";
import * as home from "./routes/home.js";
import * as songs from "./routes/songs.js";
import dotenv from "dotenv";
>>>>>>> main
dotenv.config();

const server = express();

const bodyParser = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

server.use(express.static('public'));

server.use(cookies);

server.use(token.middleware);

<<<<<<< HEAD
server.get('/authentication', auth);
server.get('/', home.get);
server.get('/songs', songs.get);
=======
server.get("/", home.get);
server.get("/songs", songs.get);
>>>>>>> main

export default server;
