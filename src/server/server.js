import express from 'express';
import bodyParser from 'body-parser'
import http from 'http';
import socketIO from 'socket.io'
import Helper from '../helpers';
import cors from 'cors';
import open from 'open';
import '@babel/polyfill';
import { CHANGE_WORD, SOCKET_IO } from '../helpers/constant'

import wordRoute from './routes/word';
import configRoute from './routes/config';
import syncRoute from './routes/sync';

const server = express();
const port = Helper.config().port || 5050;
const appServer = http.createServer(server)
const io = socketIO(appServer);
server.set(SOCKET_IO, io);

io.on('connection', socket => {
  socket.on(CHANGE_WORD, (word) => {
    io.sockets.emit(CHANGE_WORD, word)
  })
})

server.use(bodyParser.json());
server.use(cors())
server.use('/api/word', wordRoute);
server.use('/api/config', configRoute);
server.use('/api/sync', syncRoute);
server.use('/', express.static(__dirname + '/../client'));

appServer.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  open(`http://localhost:${port}`);
});