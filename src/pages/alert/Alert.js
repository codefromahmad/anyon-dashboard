import React from "react";
import "./alert.css";
import AlertIcon from "../../assets/images/Group 199.svg";
import MessageIcon from "../../assets/images/Group 251.svg";

const Alert = () => {
  return (
    <div className="alertCard">
      <div className="alertLeft">
        <div className="historyCard">
          <p>History</p>
          <div className="newChatButton">
            <p>New Chat</p>
          </div>
        </div>
        <div className="timeRemaining">
          <h4>Last 7 days</h4>
          <p>Place a buy trade on Cadbury at 12.7</p>
          <p>Place a buy trade on Cadbury at 12.7</p>
          <h4>Last 30 days</h4>
          <p>Place a buy trade on Cadbury at 12.7</p>
        </div>
        <div className="alertLeftBottom">
          <h4>Alert</h4>
          <div className="alertRow">
          <div className="alertColumn1">
            <h4>Symbol</h4>
            <p>CAD</p>
          </div>
          <div className="alertColumn2">
            <h4>Name</h4>
            <p>Alert cadbury</p>
          </div>
          <div className="alertColumn3">
            <h4>Time</h4>
            <p>5:00 pm</p>
          </div>
          <div className="alertColumn4">
            <h4>HELLO</h4>
            <img src={AlertIcon} alt="Alert" />
          </div>
          </div>
        </div>
      </div>
      <div className="alertRight">
        <div className="aiPromptHeading">
          <h4>AI Prompt</h4>
        </div>
        <div className="aiPromptText">
          <p>Create an alert using our powerful Ai tool</p>
        </div>
        <div className="alertRightTextCard">
          <div className="alertRightText">
            <p>
              1. Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum
              semper id era.{" "}
            </p>
          </div>
          <div className="alertRightText">
            <p>
              2. Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum
              semper id era.{" "}
            </p>
          </div>
          <div className="alertRightText">
            <p>
              3. Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum
              semper id era.{" "}
            </p>
          </div>
          <div className="alertRightText">
            <p>
              4. Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum
              semper id era.{" "}
            </p>
          </div>
        </div>
        <div className="aiBottom">
        <div className="messageHere">
          <p>Type message here</p>
          <img src={MessageIcon} alt="Message icon" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
