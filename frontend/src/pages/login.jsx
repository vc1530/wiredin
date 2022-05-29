import * as React from "react";
import "../styles/styles.css";
import "../styles/login.css"; 
import axios from "axios"; 
import { Navigate } from "react-router-dom"

export default function LogIn() {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const [response, setResponse] = React.useState({}) 

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
            src = "https://cdn.glitch.global/eb2b61f7-9a91-4dc7-bc5c-1551f792876d/logo.svg?v=1653683560654"
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
  else return (<Navigate to="/feed" />); 
}

