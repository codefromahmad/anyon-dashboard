import React, { useState } from "react";
import "./alert.css";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
import { ChatInput } from "../../components";

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
          </div>
        </div>
        <div className="alertLeftBottom">
          <h4>Alert</h4>
          {/* <div className="alertRow">
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
          </div> */}
          <table className="custom-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CAD</td>
                <td>5:00 PM</td>
                <td>
                  <img src={editIcon} alt="Alert" />
                  <img src={deleteIcon} alt="Alert" />
                </td>
              </tr>
              <tr>
                <td>CAD</td>
                <td>5:00 PM</td>
                <td>
                  <img src={editIcon} alt="Alert" />
                  <img src={deleteIcon} alt="Alert" />
                </td>
              </tr>
              <tr>
                <td>CAD</td>
                <td>5:00 PM</td>
                <td>
                  <img src={editIcon} alt="Alert" />
                  <img src={deleteIcon} alt="Alert" />
                </td>
              </tr>
              <tr>
                <td>CAD</td>
                <td>5:00 PM</td>
                <td>
                  <img src={editIcon} alt="Alert" />
                  <img src={deleteIcon} alt="Alert" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="alertRight">
        <div className="alertRightCard">
          <div className="alertRightTextCard">
            <div className="alertRightHeader">
              <h4>AI Prompt</h4>
              <p>Create an alert using our powerful Ai tool</p>
            </div>
            <div className="alertRightText">
              <p>
                1. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                2. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                3. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                4. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                1. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                2. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                3. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                4. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                1. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                2. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                3. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                4. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                1. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                2. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                3. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
            <div className="alertRightText">
              <p>
                4. Lorem ipsum dolor sit amet consectetur. Ullamcorper
                vestibulum semper id era.{" "}
              </p>
            </div>
          </div>
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default Alert;
