import * as React from "react";
import "../styles/chatBody.css"
import "../styles/styles.css"

export default function ChatBody(props) { 
  
  const [chat, setChat] = React.useState(props.chat) 
  
  React.useEffect(() => { 
    setChat(props.chat)
  }, [props.chat])

  let prevSender 

  const getSender = (sender) => { 
    if (sender === prevSender) return "" 
    prevSender = sender 
    return (<div className = "sender">{sender}</div>)
  }
  
  return ( 
    <div className = "chatBody">
      <header>
        <img className = "chatBodyPic" src = {chat.profile_pic} />
        {chat.name}
      </header>
      <div className = "chatMain">
        {chat.messages.map(message => (
          <div className = {message.sender === "Me" ? `message myMessage` : `message theirMessage`}>
            {getSender(message.sender)} 
            <div className = "body">{message.body}</div>
          </div>
        ))}
      </div>
    </div>
  ); 
}