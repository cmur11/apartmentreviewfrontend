import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Card,Button,Component, Form, Container} from 'semantic-ui-react'
import { Link } from "react-router-dom";

function SignUpForm({setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("")
    const history = useHistory();
  
    console.log(name, username,password,email);
  
   
  
    function handleSubmit(e) {
      e.preventDefault();
      // POST /signup
      fetch("https://lit-brushlands-74782.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            username: username,
            password: password
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.errors) {
            // set errors to show errors in the form
            setErrors(data.errors);
          } else {
            // use the response to set state
            const { user, token } = data;
            // debugger
            localStorage.setItem("token", token);
  
            setUser(data.user);
            history.push("/home");
          }
        });
    }
  
    
  
    return (

   <Container textAlign='center'>
        <Card className = "login" style= {{marginRight:"15px", marginBottom:"15px"}}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <h1>Signup</h1>
        <label>Name</label>
        <input
          type="text"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
  
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
  
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
  
  
        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
  
        {errors.map((error) => {
          return <p key={error}>{error}</p>;
        })}
           <Button type='submit'>
      
             <Button.Content>Sign Up</Button.Content>
            </Button>
             </Form>

             <Link to="/login">
         <h5>Login?</h5>
         </Link>
            </Card>
        </Container>
    );
  
}

export default SignUpForm;