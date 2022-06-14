import * as React from "react";
import "../styles/styles.css";
import "../styles/login.css"; 
import axios from "axios"; 
import { Navigate } from "react-router-dom"
import logo from "../images/logo.svg"

export default function LogIn() {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const [response, setResponse] = React.useState({}) 
  const [errorMessage, setErrorMessage] = React.useState("") 

  React.useEffect(() => { 
    if (response.success && response.token) { 
      console.log(`User successfully logged in`)
      localStorage.setItem("token", response.token) 
    }
  }, [response])
  
  const logIn = async e => {
    e.preventDefault()
    try { 
      const loginData = {
        email: email, 
        password: password, 
      }
      const response = await axios.post(
        `http://localhost:4000/login`,
        loginData
      )
      setResponse(response.data)
    } catch (err) { 
      if (err.response?.status === 401) 
        setErrorMessage("Please enter a username and password.")
      if (err.response?.status === 404) 
        setErrorMessage("A user with this email address does not exist.") 
      if (err.response?.status === 403) 
        setErrorMessage("Incorrect password. Please double check your password.") 
      console.log(err.response) 
      console.log( `Login failed`)
    }

  }
  
  if (!response.success) 
    return (
      <div id = "login" className = "container">
        <div id = "login-container">
          <img 
            height = "75px"
            src = {logo} 
          /> 
          <span> 
            Inspiring a new generation of female tech leaders 🙌💕
          </span>
          <form id = "login-form" onSubmit = {logIn}> 
            <div className = "mb-3">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
                name = "email" 
                type = "text" 
                value = {email}
                onChange = {e => { 
                  setEmail(e.target.value)
                  setErrorMessage("")
                }}
                required
              />
            </div>
            <div className = "mb-3">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input
                className="form-control"
                id="passwordInput"
                name = "password" 
                type = "password" 
                value = {password}
                onChange = {e => { 
                  setPassword(e.target.value)
                  setErrorMessage("") 
                }}
                required
              />
            </div>
            <button type = "submit" className="btn btn-primary">Login</button>
          </form>
          {errorMessage ? (<div className="error">{errorMessage}</div>) : ""}
        </div>
      </div>
    );
  else return (<Navigate to="/feed" />); 
}

