import React, { useState } from "react";
import "./alert.css";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
import { ChatInput } from "../../components";

const alerts = [
  {
    symbol: "CAD",
    time: "5:00 PM",
  },
  {
    symbol: "USD",
    time: "3:00 PM",
  },
  {
    symbol: "CHF",
    time: "2:20 PM",
  },
  {
    symbol: "NGN",
    time: "6:00 PM",
  },
];

const aiIntro = [
  {
    text: "Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum semper id era.",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum semper id era.",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum semper id era.",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum semper id era.",
  },
];

const Alert = () => {
  return (
    <div className="alertCard">
      <div className="alertLeft">
        <div className="alertLeftTop">
          <div className="historyCard">
            <p>History</p>
            <div className="newChatButton">
              <p>New Chat</p>
            </div>
          </div>
          <div className="timeRemaining">
<<<<<<< HEAD
            <h4>Last 7 days</h4>
            <p>Place a buy trade on Cadbury at 12.7</p>
            <p>Place a buy trade on Cadbury at 12.7</p>
            <h4>Last 30 days</h4>
            <p>Place a buy trade on Cadbury at 12.7</p>
            <h4>Last 7 days</h4>
            <p>Place a buy trade on Cadbury at 12.7</p>
            <p>Place a buy trade on Cadbury at 12.7</p>
            <h4>Last 30 days</h4>
            <p>Place a buy trade on Cadbury at 12.7</p>
            <h4>Last 7 days</h4>
            <p>Place a buy trade on Cadbury at 12.7</p>
            <p>Place a buy trade on Cadbury at 12.7</p>
            <h4>Last 30 days</h4>
            <p>Place a buy trade on Cadbury at 12.7</p>
=======
            <p className="date">Last 7 days</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="date">Last 30 days</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="date">Last 30 days</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
>>>>>>> dde0464ca44d8928ff585f67036b31498f253292
          </div>
        </div>
        <div className="alertLeftBottom">
          <h4>Alert</h4>
<<<<<<< HEAD
          <div className="alertRow">
=======
          {/* <div className="alertRow">
>>>>>>> dde0464ca44d8928ff585f67036b31498f253292
            <div className="alertColumn1">
              <h4>Symbol</h4>
              <p>CAD</p>
            </div>
            <div className="alertColumn3">
              <h4>Time</h4>
              <p>5:00 pm</p>
            </div>
            <div className="alertColumn4">
              <h4>HELLO</h4>
              <img src={AlertIcon} alt="Alert" />
            </div>
<<<<<<< HEAD
          </div>
=======
          </div> */}
          <table className="custom-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr key={index}>
                  <td>{alert.symbol}</td>
                  <td>{alert.time}</td>
                  <td>
                    <img src={editIcon} alt="Alert" />
                    <img src={deleteIcon} alt="Alert" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
>>>>>>> dde0464ca44d8928ff585f67036b31498f253292
        </div>
      </div>
      <div className="alertRight">
        <div className="alertRightCard">
          <div className="alertRightTextCard">
            <div className="alertRightHeader">
              <h4>AI Prompt</h4>
              <p>Create an alert using our powerful Ai tool</p>
            </div>
            <ol>
              {aiIntro.map((ai, index) => (
                <li key={index} className="alertRightText">
                  <p>
                    <span className="custom-number">{index + 1}. </span>
                    {ai.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
<<<<<<< HEAD
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
          <div className="alertRightText">
            <p>
              4. Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum
              semper id era.{" "}
            </p>
          </div>
          <div className="alertRightText">
            <p>
              4. Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum
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
            <input type="text" placeholder="Type message here..." />
            <img src={MessageIcon} alt="Message icon" />
          </div>
=======
          <ChatInput />
>>>>>>> dde0464ca44d8928ff585f67036b31498f253292
        </div>
      </div>
    </div>
  );
};

export default Alert;
