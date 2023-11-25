import React from "react";
import "./marketsai.css";
import { ChatInput } from "../../components";

const positions = [
  {
    symbol: "CAD",
    pnl: "+10.5",
    pnlp: "+0.5%",
  },
  {
    symbol: "CAD",
    pnl: "-10.5",
    pnlp: "-0.5%",
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

const MarketsAi = () => {
  return (
    <div className="alert-card">
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
            <p className="date">Last 30 days</p>
            <p className="item">Place a buy trade on Cadbury at 12.7</p>
          </div>
        </div>
        <div className="alertLeftBottom">
          <h4>Positions</h4>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Open P&L</th>
                <th>Open P&L%</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((position, index) => (
                <tr key={index}>
                  <td>{position.symbol}</td>
                  <td
                    className={`${
                      position.pnl.includes("+") ? "green-div" : "red"
                    }`}
                  >
                    {position.pnl}
                  </td>
                  <td
                    className={`${
                      position.pnlp.includes("+") ? "green-div" : "red"
                    }`}
                  >
                    {position.pnlp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="alertRight">
        <div className="alertRightCard">
          <div className="alertRightTextCard">
            <div className="alertRightHeader">
              <h4>Trading AI</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum
                semper id erat pulvinar qui.
              </p>
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
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default MarketsAi;
