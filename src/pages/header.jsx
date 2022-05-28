import * as React from "react";
import { Link } from "wouter";
import "../styles/styles.css";
import "../styles/header.css"; 

export default function Header () { 
  return ( 
    <header className = "header">
      <img 
        id = "logo"
        height = "60px" 
        src = "https://cdn.glitch.global/eb2b61f7-9a91-4dc7-bc5c-1551f792876d/logo.svg?v=1653683560654"
        alt = "logo"
        onClick = {()=>window.location.href="/feed"}
      />
      <nav>
        <Link className="navbutton" to="/">Home</Link>
        <Link className="navbutton" to="/chat">Chats</Link>
        <Link className="navbutton" to="/settings">Settings</Link>
      </nav>
    </header>
  )
}; 