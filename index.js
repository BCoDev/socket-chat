var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});

io.on('connection' , function(socket){
    console.log('a user disconnected');
    socket.on('disconnect' , function(){
        console.log('a user disconnected');
    });
});

io.on('connection' , function(socket){
    socket.on('chat message' , function(msg){
        console.log('message: ' + msg);
    });
});