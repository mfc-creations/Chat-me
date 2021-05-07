import React from "react";
import Profile from "../../assets/profile.png";
const Message = ({ message, user }) => {
  const { text, uid, photoURL } = message;
  const messageClass = uid === user.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || Profile} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Message;
