import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import "../styles/styles.css";
import "../styles/settings.css";
import Header from "./header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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

   var checkBoxState = {
    checkbox: "",
    errorMsg: {
      checkbox:"Please select atleast one option"
    },
    selectedCheckBox: 0,
    formValid: false
  };

  var updateCheckbox = ({ name, checked }) => {
    console.log("bruh")
    console.log(checkBoxState.selectedCheckBox);
    console.log("begin "+checked.toString());

    checkBoxState.checkbox=checked;
    if (checked){
      checkBoxState.selectedCheckBox++;
    }
    else{
      checkBoxState.selectedCheckBox--;
    }
    console.log(checkBoxState.selectedCheckBox);
    console.log("Before valid: " + checkBoxState.formValid.toString());
    validateCheckbox();
    console.log("after valid: " + checkBoxState.formValid.toString());
  };

  var validateCheckbox = () => {
    if (checkBoxState.selectedCheckBox < 1) {
      checkBoxState.formValid=false;
    }
    else{
      checkBoxState.formValid=true;
    }
  };

  const submitChanges = e => {
    e.preventDefault();
    if (checkBoxState.formValid) {
      window.location.href="/feed";
    }
    else{
      toast("Please select at least one option",{
        position:toast.POSITION.BOTTOM_RIGHT
      });
    }
  };
  
  return (
    <div className ="settings">
      <Header />
        <form onSubmit={submitChanges}>
          <div className="settings-container">
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
              <label htmlFor="emailInput" className="form-label">Emailaddress</label>
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
            <div className = "mb-3 settingsQuestion">
              <span>Where are you currently located?</span>
              <select className="selectpicker" data-live-search="true">
                {states.map(state => 
                  (<option data-tokens = {state}>{state}</option>)           
                )}
              </select>
            </div>
            <div className = "mb-3 settingsQuestion">
              <span>What is your major?</span>
              <select className="selectpicker" data-live-search="true">
                {majors.map(major => 
                  (<option data-tokens = {major}>{major}</option>)           
                )}
              </select>
            </div>
          </div>
          <div className="settings-container">
            <div className = "mb-3 settingsQuestion">
              <span>What are your interests or skills?</span>
              <input 
                name = "skills" 
                type = "text"  
                value = {skills}
                onChange = {e=>setSkills(e.target.value)}
                required
              />
            </div>
            <div className = "mb-3 settingsQuestion">
              <span>Please enter the name of your college.</span>
              <input 
                name = "college" 
                type = "text"  
                value = {college}
                onChange = {e=>setCollege(e.target.value)}
                required
              />
            </div>
            <div className = "mb-3 settingsQuestion">
              <span>Are you a mentor or mentee?</span>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="mentee" required/>
                  <label className="form-check-label" htmlFor="mentee">
                  Mentee
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="mentor" required/>
                <label className="form-check-label" htmlFor="mentor">
                Mentor
                </label>
                <div className="invalid-feedback">Please select an option.</div>
              </div>
            </div>
            <div className = "mb-3 settingsQuestion">
              <span>Are you looking for an in person or virtual mentor/mentee?</span>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    name="inPerson"
                    type="checkbox" 
                    value="" 
                    id="inPerson"
                    onChange={(e) => updateCheckbox(e.target)}
                    />
                  <label className="form-check-label" htmlFor="inPerson">
                  In Person
                  </label>
                  
                </div>
                  <div className="invalid-feedback">
                      Please select an option.
                  </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    name="virtual" 
                    type="checkbox" 
                    value="" 
                    id="virtual"
                    onChange={(e) => updateCheckbox(e.target)}
                    />
                  <label className="form-check-label" htmlFor="virtual">
                  Virtual
                  </label>
                </div>
              <ToastContainer limit ={1}/>
            </div>
          </div>
          <button type="submit" className = "btn btn-primary">Submit Changes</button>
        </form>
    </div>
  );
}