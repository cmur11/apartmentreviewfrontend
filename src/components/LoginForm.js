import React, { useState } from "react";
import { Link } from "react-router-dom";

import {Card,Button,Component, Form, Container} from 'semantic-ui-react'

function LoginForm({handleLogin}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signUp, setSignUp] = useState(false)
 
  function handleSubmit(e){
    console.log(username, password)

  }
 console.log(signUp)
 
    return (
      <>
       <Container textAlign='center'>
          <Card className = "login" style= {{marginRight:"15px", marginBottom:"15px"}}>
        
         
          <Form onSubmit = {(e) => handleSubmit(e)}>
            <Form.Field>
              <Form.Input 
                type="text"
                value={username}
                id="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
              <input
                type="password"
                value={password}
                id="password"
                placeholder="Password" 
                onChange={(e) => (setPassword(e.target.value))} 
                />
              </Form.Field>
          <Link to="/home/">

           <Button type='submit'>
      
             <Button.Content>Login</Button.Content>
          </Button>
          </Link> 

         </Form>
         {/* <Button  onClick = {setSignUp(true)}>>SignUp?</Button> */}
        </Card>
        </Container>
  </>
    ) 
}

  
  export default LoginForm;
