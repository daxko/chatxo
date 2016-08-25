var koa = require('koa')
  , mount = require('koa-mount')
  , serve = require('koa-static')
  , socketio = require('socket.io')
  , path = require('path');

const app = koa();

app.use(serve(path.resolve(__dirname, '../public')));

var server = require('http').Server(app.callback());
const io = socketio(server);
var messages = [];
io.on('connection', socket => {
  console.log('user has connected');
  
  socket.on('get history', () => {
    console.log('history requested');
    socket.emit('history', messages);
  });

  socket.on('chat message', data => {
    console.log('message received: ' + JSON.stringify(data));
    messages.push(data);
    socket.broadcast.emit('new message', data);
  });

});

server.listen(3000);
console.log('listening on port 3000');