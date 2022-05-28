import * as React from "react";
import { Link } from "wouter";
import "../styles/styles.css";
import "../styles/profilecard.css"; 

export default function ProfileCard(props) {
  
  return (
    <div id = "profilecard" className = "container">
      <div id = "profilecard-sidebar">
        <img
          id = "profilecard-pic" 
          src = {props.user.profile_pic} 
          alt = "hello" 
        />
        <hr/>
        <div className = "info"> 
          <span className = "label">Pronouns</span>
          <span className = "ans">{props.user.pronouns}</span>
        </div>
        <hr/>
        <div className = "info"> 
          <span className = "label">Location</span>
          <span className = "ans">{props.user.location}</span>
        </div>
        <hr/>
        <div className = "info"> 
          <span className = "label">College</span>
          <span className = "ans">{props.user.college}</span>
        </div>
        <hr/>
        <div className = "info"> 
          <span className = "label">Major</span>
          <span className = "ans">{props.user.major}</span>
        </div>    
        <hr/>
      </div>
      <div id = "profilecard-main">
        <h2>
          {props.user.name}
        </h2>
        <p>
          {props.user.bio} 
        </p>
        <h3> 
          Experience
        </h3>
        {props.user.experience.map(e => (
          <div id = "experience">
            <div> 
              <span className = "workplace">{e.workplace}</span>
              <span>{e.position}</span>
            </div>
            <div>
              {e.startDate} - {e.endDate} 
            </div>
          </div>
        ))}
        <h3> 
          Skills
        </h3>
        <div>
          {props.user.skills.map((s,i) => {
            if (i !== props.user.skills.length - 1) 
              return <span>{s} | </span>
            else return <span>{s}</span>
          })}
        </div>
      </div>
    </div>
  );
}