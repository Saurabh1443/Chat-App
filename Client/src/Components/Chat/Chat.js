import React, { useEffect, useState } from 'react'
import{user} from './Join';
import  {io} from 'socket.io-client'
import './Chat.css'
import Messages from './Messages'
import ReactScrollToBottom from 'react-scroll-to-bottom'

 let socket
function Chat() {
 let user1 = user!=="undefined"?user:null;
 const [text,setText] = useState('')
   const [id,setId] = useState('');
    const[message,setMessage] =useState([])
   
useEffect(()=>{
  socket = io('http://localhost:3009')
  socket.on('connect',()=>{  
    setId(socket.id);
    
})
   socket.emit('join',({user}));
   socket.on('welcome',({data,message})=>{
  console.log(message)
   })
   socket.on('userJoined',({data,message})=>{
     console.log(message)
   })
   return ()=>{
     socket.emit('disconnect');
     socket.off()
   }
},[])
useEffect(()=>{
   socket.on('sendMessages',(data)=>{
    setMessage([...message,data])
   })
    return ()=>{
      socket.off();
    }
},[message])

const send=()=>{
  console.log(text)
 
   socket.emit('message',{text,id});
  setText('');
  
}
  return (
    <div className="chat_page">
    
   <div className="chat_container">
     <div className="chat_header">Whattsapp</div>
       <ReactScrollToBottom className="chat_box">
     {message.map((data,id1)=><Messages user={data.id===id ? 'you':data.user}  messages = {data.text} classs={data.id===id ? 'right':'left'} />)}
       </ReactScrollToBottom>
       <div className="footer">
         <input onKeyPress={(event)=>event.key==="Enter" ?send():null} type="text" placeholder="type your message..." className="chat_input"  value={text} onChange={e=>setText(e.target.value)}/>
         <button className="chat_btn" onClick={send}>send</button>
       </div>
      
   </div>


    </div>
  )

  }

export default Chat