import * as React from "react";
import "../styles/styles.css";
import "../styles/signup.css"; 
import logo from "../images/logo.svg" 

export default function SignUp() {
  
  const [name, setName] = React.useState('') 
  const [email, setEmail] = React.useState('') 
  const [password, setPassword] = React.useState('') 
  
  
  const signUp = e => { 
    //more stuff once we set up backend
    e.preventDefault()
    window.location.href="/quiz"
  }
  
  return (
    <div id = "signup" className = "container">
      <div id = "signup-container">
        <img 
          height = "75px"
          src = {logo} 
        /> 
        <span> 
          Inspiring a new generation of female tech leaders 🙌💕
        </span>
        <form id = "signup-form" onSubmit = {signUp}>
          <div className = "mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input
              className="form-control"
              id="nameInput"
              name = "name" 
              placeholder = "Your Name"
              type = "text"
              value = {name} 
              onChange = {e => setName(e.target.value)}
              required
            />
          </div>
          <div className = "mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              name = "email" 
              type = "text" 
              value = {email}
              onChange = {e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className = "mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input
              className="form-control"
              id="passwordInput"
              name = "password" 
              placeholder = "Password"
              type = "password" 
              value = {password}
              onChange = {e => setPassword(e.target.value)}
              required
            />
            <div className="invalid-feedback">
              Please enter a valid password.
            </div>
          </div>
          <button type="submit" className = "btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
