import React, { useEffect, useRef, useState } from "react";
import "./alertlefttop.css";

const AlertLeftTop = () => {
  const [isLeftTopScrolling, setIsLeftTopScrolling] = useState(false);
  const alertLeftTopRef = useRef(null);

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

  return (
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
  );
};

export default AlertLeftTop;
