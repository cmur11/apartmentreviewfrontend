import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Card,Button,Component, Form, Container} from 'semantic-ui-react'

function SignUpForm({setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([]);
    const history = useHistory();
  
    console.log(errors);
  
   
  
    function handleSubmit(e) {
      e.preventDefault();
      // POST /signup
      fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email
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
  
            localStorage.setItem("token", token);
  
            setUser(user);
            history.push("/home");
          }
        });
    }
  
    
  
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Signup</h1>
  
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
        <input type="submit" value="Signup" />
      </form>
    );
  
}

export default SignUpForm;