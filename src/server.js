import express from 'express';
import cookieParser from 'cookie-parser';
import serverMiddleware from './session.js';
// import home from './routes/home.js';
import dotenv from 'dotenv';
dotenv.config();

const server = express();

const bodyParser = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

server.use(express.static('public'));

server.use(cookies);

server.use(serverMiddleware);

// server.get('/', home.get);

export default server;
