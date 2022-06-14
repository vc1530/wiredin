import * as React from "react";
import Header from "./header"; 
import ChatBody from "./chatBody"
import chats from "../data/chats.json"
import "../styles/chat.css"
import "../styles/styles.css"
import { BiEdit } from "react-icons/bi"

export default function Chat() {
  
  const accentColor = "#392f5a" 
  const hoverColor = "#59498c" 
  
  const [currentChat, setCurrentChat] = React.useState({})
  
  const getCurrentChat = chat => { 
    setCurrentChat(chat) 
    const chats = document.getElementsByClassName("chatCard") 
    for (let i = 0; i < chats.length; i ++) { 
      chats[i].style.backgroundColor = accentColor; 
    }
    const currChat = document.getElementById(`${chat.name}chat`)
    currChat.style.backgroundColor = hoverColor; 
  }
  
  const getLastMessage = chat => { 
    return chat.messages[chat.messages.length - 1]; 
  }
  
  return ( 
    <div>
      <Header /> 
      <div id = "chat">
        <div id = "chatSidebar">
          <header>
            <div className="placeholder"></div>
            <div>Chats</div>
            <BiEdit size = "28px" /> 
          </header>
          {chats.map(chat => (
            <div id = {`${chat.name}chat`} className = "chatCard" onClick = {() => getCurrentChat(chat)}>
              <img className = "chatPic" src = {chat.profile_pic} alt = "bart" />
              <div className = "cardBody">
                <h5 className = "chatName">{chat.name}</h5>
                <span className = "sender">{getLastMessage(chat).sender}</span>
                <span className = "lastMessage">: {getLastMessage(chat).body}</span>
              </div>
            </div>
          ))}
        </div>
        {currentChat.messages ? 
          (<ChatBody chat = {currentChat} />) : 
          (<ChatBody />)
        } 
      </div>
    </div>
  )
}