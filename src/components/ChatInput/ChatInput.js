import React, { useState } from "react";
import "./chatinput.css";
import MessageIcon from "../../assets/images/Group 251.svg";

const ChatInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("User entered:", inputValue);
    setInputValue("");
  };

  return (
    <div className="chatInputContainer">
      <div className="chatinput">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <img src={MessageIcon} alt="send" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default ChatInput;
