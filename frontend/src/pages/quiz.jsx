import * as React from "react";
import "../styles/quiz.css"
import "../styles/styles.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Quiz() { 
  
  //will need to change these to have dropdown options later
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
  
  const quizSubmit = e => {
    e.preventDefault();
    if (checkBoxState.formValid) {
      window.location.href="/feed";
    }
    else{
      toast("Please select at least one option");
    }
  }
  

  return ( 
    <div id = "quiz">
      <p>
        We would like to ask you a few questions to
        improve your WiredIn experience 🧐
      </p>
      <form id = "quizForm" onSubmit={quizSubmit}>
      <div id="quizCarousel" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#quizCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#quizCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#quizCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#quizCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#quizCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#quizCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className = 'question'>
              <span>Where are you currently located?</span>
              <select className="selectpicker" data-live-search="true">
                {states.map(state => 
                  (<option data-tokens = {state}>{state}</option>)           
                )}
              </select>
            </div>
          </div>
          <div className="carousel-item">
            <div className = 'question'>
              <span>What is your major?</span>
              <select className="selectpicker" data-live-search="true">
                {majors.map(major => 
                  (<option data-tokens = {major}>{major}</option>)           
                )}
              </select>
            </div>
          </div>
          <div className="carousel-item">
            <div className = 'question'>
              <span>What are your interests or skills?</span>
              <input 
                name = "skills" 
                type = "text"  
                value = {skills}
                onChange = {e=>setSkills(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className = 'question'>
              <span>Please enter the name of your college.</span>
              <input 
                name = "college" 
                type = "text"  
                value = {college}
                onChange = {e=>setCollege(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className = 'question'>
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
          </div>
          <div className="carousel-item">
            <div className = 'question'>
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
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#quizCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#quizCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <button id = "quizSubmitButton" type = "submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  ); 

}; 