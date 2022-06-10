import * as React from "react";
import "../styles/styles.css";
import "../styles/home.css"; 

export default function Home() {
  return (
    <div id = "home">
      <img 
        src = "https://cdn.glitch.global/eb2b61f7-9a91-4dc7-bc5c-1551f792876d/logo.svg?v=1653683560654"
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
