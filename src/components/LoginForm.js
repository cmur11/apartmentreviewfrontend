import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Card,Button,Component, Form, Container} from 'semantic-ui-react'

function LoginForm({handleLogin, user, setUser}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signUp, setSignUp] = useState(false)
  const [errors, setErrors] = useState([]);
  const history = useHistory();

console.log(username,password)
  function handleLogin(e) {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then((r) => r.json())
    .then((data) => {
      if (data.errors) {
        // set errors to show errors in the form
        debugger
        setErrors(data.errors);
      } else {
        // use the response to set state
        const { currentUser, token } = data;
        // debugger
       
          localStorage.setItem("token", token);
          setUser(data.user);
          history.push("/home");
        }
      });
  }

 console.log(user)
  function handleLogout() {
    setUser(null);
  }
 console.log(signUp)
 
    return (
      <>
       <Container textAlign='center'>
          <Card className = "login" style= {{marginRight:"15px", marginBottom:"15px"}}>
        
          <Form onSubmit = {(e) => handleLogin(e)}>
            {/* <Form.Field> */}
              <input
                type="text"
                value={username}
                id="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                />
            {/* </Form.Field> */}
            {/* <Form.Field> */}
              <input
                type="password"
                value={password}
                id="password"
                placeholder="Password" 
                onChange={(e) => (setPassword(e.target.value))} 
                />
              {/* </Form.Field> */}
       

          {errors.map((error) => {
          return <p key={error}>{error}</p>;
        })}
           <Button type='submit'>
      
             <Button.Content>Login</Button.Content>
          </Button>
          

         </Form>
         {/* <Button  onClick = {setSignUp(true)}>>SignUp?</Button> */}
        </Card>
        </Container>
  </>
    ) 
}

  
  export default LoginForm;
