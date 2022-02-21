import React from 'react'
import './Messages.css'
function Messages({user,messages,classs}) {
    
  return (

    <div className={`message_box ${classs}`}>{user} {messages}</div>
  )
}

export default Messages