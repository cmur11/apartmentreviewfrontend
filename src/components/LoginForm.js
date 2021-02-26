import React, { useState } from "react";
import { Link } from "react-router-dom";
// import '../components/css/login.css';
// import { Header, Button, Icon } from 'semantic-ui-react'


function LoginForm({handleLogin}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [user, setUser] = useState([])
 

 
  // function handleSubmit(e){
  //   e.preventDefault()
    
  
  //   fetch('http://localhost:3000/users')
  //   .then(res => res.json())
  //   .then((users) => handleLogin(users[0]))
   
  // }  
  // console.log(user)
  // console.log(loggedIn)
    return (
      <div className="login">
        {/* <Header as='h1' color="grey">Sign In</Header> */}
        <form 
        //  onSubmit={handleSubmit}
          href="/home"
          className="login-form"
          
        >
            <input 
              type="text"
              value={username}
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              id="password"
              placeholder="Password" 
              onChange={(e) => (setPassword(e.target.value))} 
            />
          <Link to="/home">

           <button animated
            type="submit"
            className="login-button">
            Login
          </button>
          </Link> 
        </form>
    </div>
    ) 
}

  
  export default LoginForm;
