import React, { useEffect, useRef, useState } from "react";
import "./alert.css";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
import { ChatInput } from "../../components";
import AiPrompt from "../../components/AiPrompt/AiPrompt";
import { LuHistory } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHistory } from "../../redux/reducers/pageDetail";

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
  const [isLeftTopScrolling, setIsLeftTopScrolling] = useState(false);
  const [isLeftBottomScrolling, setIsLeftBottomScrolling] = useState(false);
  const [isAlertRight, setIsAlertRight] = useState(false);
  const alertLeftTopRef = useRef(null);
  const alertLeftBottomRef = useRef(null);
  const alertRightRef = useRef(null);
  const history = useSelector((state) => state.page.history);
  const dispatch = useDispatch();

  console.log("history", history);

  useEffect(() => {
    const handleScroll = () => {
      setIsLeftTopScrolling(true);
    };

    const hideScrollbar = () => {
      setIsLeftTopScrolling(false);
    };

    const alertLeftTopElement = alertLeftTopRef.current;

    alertLeftTopElement.addEventListener("scroll", handleScroll);
    alertLeftTopElement.addEventListener("mouseleave", hideScrollbar);

    return () => {
      alertLeftTopElement.removeEventListener("scroll", handleScroll);
      alertLeftTopElement.removeEventListener("mouseleave", hideScrollbar);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsLeftBottomScrolling(true);
    };

    const hideScrollbar = () => {
      setIsLeftBottomScrolling(false);
    };

    const alertLeftBottomElement = alertLeftBottomRef.current;

    alertLeftBottomElement.addEventListener("scroll", handleScroll);
    alertLeftBottomElement.addEventListener("mouseleave", hideScrollbar);

    return () => {
      alertLeftBottomElement.removeEventListener("scroll", handleScroll);
      alertLeftBottomElement.removeEventListener("mouseleave", hideScrollbar);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsAlertRight(true);
    };

    const hideScrollbar = () => {
      setIsAlertRight(false);
    };

    const alertRightElement = alertRightRef.current;

    alertRightElement.addEventListener("scroll", handleScroll);
    alertRightElement.addEventListener("mouseleave", hideScrollbar);

    return () => {
      alertRightElement.removeEventListener("scroll", handleScroll);
      alertRightElement.removeEventListener("mouseleave", hideScrollbar);
    };
  }, []);

  const { pathname } = useLocation();

  return (
    <>
      <div className="alertCard">
        <div className="alertLeft">
          <div
            className={`alertLeftTop ${
              isLeftTopScrolling ? "scrolling" : "notscrolling"
            }`}
            ref={alertLeftTopRef}
          >
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
          <div
            className={`alertLeftBottom ${
              isLeftBottomScrolling ? "scrolling" : "notscrolling"
            }`}
            ref={alertLeftBottomRef}
          >
            <h4>Alert</h4>
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
          </div>
        </div>
        <div className="alertRight">
          <div className="alertRightCard">
            <div
              className={`alertRightTextCard ${
                isAlertRight ? "scrolling" : "notscrolling"
              }`}
              ref={alertRightRef}
            >
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
            <ChatInput />
          </div>
        </div>
      </div>
      {history ? (
        <p onClick={() => dispatch({ type: "setHistory", payload: false })}>
          History
        </p>
      ) : (
        <div className="mobileAiPrompt">
          <div className="mobileAlertTop">
            <div
              onClick={() => dispatch({ type: "setHistory", payload: true })}
              className="historyIcon"
            >
              <LuHistory />
            </div>
            <div className="aiPromptButtons">
              <Link
                to="/alert"
                className={
                  pathname === "/alert" ? "active-item" : "nonactive-item"
                }
              >
                <p>AI</p>
              </Link>
              <Link
                to="/alertmanual"
                className={
                  pathname === "/alertmanual" ? "active-item" : "nonactive-item"
                }
              >
                <p>Manual</p>
              </Link>
            </div>
          </div>
          <AiPrompt />
        </div>
      )}
    </>
  );
};

export default Alert;
