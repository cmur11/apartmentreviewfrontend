import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../components/css/login.css';
// import { Header, Button, Icon } from 'semantic-ui-react'


function LoginForm(){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState([])
 

 
  function handleSubmit(e){
    e.preventDefault()
    console.log(user)
  
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => setUser(users[0]))
    
  }  

    return (
      <div className="login">
        {/* <Header as='h1' color="grey">Sign In</Header> */}
        <form 
         onSubmit={handleSubmit}
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
          {/* <Link to="/home"> */}

          {/* <Button animated
            type="submit"
            className="login-button">
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
              <Icon name='fire' />
            </Button.Content>
          </Button>
          </Link> */}
        </form>
    </div>
    ) 
}

  
  export default LoginForm;
