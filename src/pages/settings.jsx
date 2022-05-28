import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import "../styles/styles.css";
import "../styles/settings.css";
import Header from "./header"

export default function Settings(){
  const [name, setName] = React.useState('') 
  const [email, setEmail] = React.useState('') 
  const [password, setPassword] = React.useState('')
  const [location, setLocation] = React.useState(''); 
  const [major, setMajor] = React.useState(''); 
  const [skills, setSkills] = React.useState(''); 
  const [college, setCollege] = React.useState('');
  
    const states = [ "AK - Alaska", 
                "AL - Alabama", 
                "AR - Arkansas", 
                "AS - American Samoa", 
                "AZ - Arizona", 
                "CA - California", 
                "CO - Colorado", 
                "CT - Connecticut", 
                "DC - District of Columbia", 
                "DE - Delaware", 
                "FL - Florida", 
                "GA - Georgia", 
                "GU - Guam", 
                "HI - Hawaii", 
                "IA - Iowa", 
                "ID - Idaho", 
                "IL - Illinois", 
                "IN - Indiana", 
                "KS - Kansas", 
                "KY - Kentucky", 
                "LA - Louisiana", 
                "MA - Massachusetts", 
                "MD - Maryland", 
                "ME - Maine", 
                "MI - Michigan", 
                "MN - Minnesota", 
                "MO - Missouri", 
                "MS - Mississippi", 
                "MT - Montana", 
                "NC - North Carolina", 
                "ND - North Dakota", 
                "NE - Nebraska", 
                "NH - New Hampshire", 
                "NJ - New Jersey", 
                "NM - New Mexico", 
                "NV - Nevada", 
                "NY - New York", 
                "OH - Ohio", 
                "OK - Oklahoma", 
                "OR - Oregon", 
                "PA - Pennsylvania", 
                "PR - Puerto Rico", 
                "RI - Rhode Island", 
                "SC - South Carolina", 
                "SD - South Dakota", 
                "TN - Tennessee", 
                "TX - Texas", 
                "UT - Utah", 
                "VA - Virginia", 
                "VI - Virgin Islands", 
                "VT - Vermont", 
                "WA - Washington", 
                "WI - Wisconsin", 
                "WV - West Virginia", 
                "WY - Wyoming"
  ]
  
  const majors = [ 
    "Computer Engineering", 
    "Computer Science", 
    "Data Science", 
    "Engineering", 
    "Software Engineering", 
    "Web Design", 
    "Web Development", 
  ]  
  
  
  const submitChanges = () => {
  }
  
  return (
    <div>
      <Header />
      <div className="settings-container">
          <form>
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
            <div className = "mb-3 question">
              <span>Where are you currently located?</span>
              <select className="selectpicker" data-live-search="true">
                {states.map(state => 
                  (<option data-tokens = {state}>{state}</option>)           
                )}
              </select>
            </div>
          <button type="submit" className = "btn btn-primary">Submit Changes</button>
          </form>
      </div>
    </div>
  );
  
}