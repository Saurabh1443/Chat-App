import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './Join.css'
  let user;
function Join() {
 
    const navigate =useNavigate()
    const register=()=>{
         user =document.getElementById('inputs').value
         document.getElementById('inputs').value=""
         if(user){
            navigate('/chat');
         }
         else{
             alert('enter your name')
         }  
    }
   
  return (
    <div className="Join">
      <div className= "join_container">
          <div className="header">
          <img src="https://thumbs.dreamstime.com/z/live-chat-icon-web-button-blue-vector-illustration-isolated-white-background-118117935.jpg"/>
           <h3>Your chat App</h3>
          </div>
          
           <div className="join_login">
             <h3>Register</h3><br />
             <input type="text" placeholder='enter your name' id="inputs" />
         
           <button onClick={register}>Register</button> 
             </div>
      </div>
      
    </div>
  )
}

export default Join;
 export  {user}