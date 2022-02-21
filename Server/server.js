const express =require('express');
const cors = require('cors')
const http=require('http')
const Socket = require('socket.io');

const app =express();
app.use(cors());
const server = http.createServer(app);
const users=[{}];
const io =Socket(server,{
    cors:{
        origin:"http://localhost:3000"
    },
    methods:['GET','POST']
})
io.on('connect',(socket)=>{
   socket.on('join',({user})=>{
       users[socket.id] = user;
       console.log(`${user} has joined`)

       socket.broadcast.emit("userJoined",{user:"admin",message:`${users[socket.id]} new joinee`})
   })
   socket.emit('welcome',{user:"Admin",message:"welcome to the chat"});
   socket.on('message',({text,id})=>{
       io.emit('sendMessages',{user:users[id],text,id})
   })
  socket.on('disconnect', ()=>{
      console.log("disconnected")
  })
})

server.listen(3009,()=>{
    console.log('server listening')
});