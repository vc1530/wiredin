import * as React from "react";
import "../styles/styles.css";
import "../styles/home.css"; 
import logo from "../images/logo.svg"

export default function Home() {
  return (
    <div id = "home">
      <img 
        src = {logo}
        alt = "logo"
      /> 
      <p>
        At WiredIn, we believe that everyone, especially women in tech, should have a mentor. 
        Pick from a curated list of mentors that our developers picked just for you — sign up to start wiring now!
      </p>
      <div id = "home-btns">
        <button onClick = {() => window.location.href = "/signup"}>
          Sign Up
        </button>
        <button button onClick = {() => window.location.href = "/login"}> 
          Log In 
        </button>
      </div>
    </div>
  );
}
