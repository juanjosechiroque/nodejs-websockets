const express = require('express');

const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.emit('message', 'Welcome!');
})

setInterval( () => {
  io.emit('message', 'Hello everyone');
}, 3000);

server.listen(3000, () => {
  console.log('Running on por 3000');
});
