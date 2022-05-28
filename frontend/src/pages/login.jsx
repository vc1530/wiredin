import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import "../styles/styles.css";
import "../styles/login.css"; 

export default function LogIn() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  //uhhhhhhhhhhhhhhhhhhhh how to do
  const logIn = e => {
    e.preventDefault()
    window.location.href="/feed"
  }
  
  return (
    <div id = "login" className = "container">
      <div id = "login-container">
        <img 
          height = "75px"
          src = "https://cdn.glitch.global/eb2b61f7-9a91-4dc7-bc5c-1551f792876d/logo.svg?v=1653683560654"
        /> 
        <span> 
          Inspiring a new generation of female tech leaders 🙌💕
        </span>
        <form id = "login-form" onSubmit = {logIn}> 
          <div class = "mb-3">
            <label for="emailInput" class="form-label">Email address</label>
            <input
              class="form-control"
              id="emailInput"
              placeholder="name@example.com"
              name = "email" 
              type = "text" 
              value = {email}
              onChange = {e => setEmail(e.target.value)}
              required
            />
          </div>
          <div class = "mb-3">
            <label for="passwordInput" class="form-label">Password</label>
            <input
              class="form-control"
              id="passwordInput"
              name = "password" 
              type = "text" 
              value = {password}
              onChange = {e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type = "submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}

