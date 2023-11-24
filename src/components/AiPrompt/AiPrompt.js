import React, { useState, useRef } from "react";
import "./aiprompt.css";
import { ChatInput } from "../../components";
import { useEffect } from "react";

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
  {
    text: "Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum semper id era.",
  },
];

const AiPrompt = () => {
  const [isAlertRight, setIsAlertRight] = useState(false);
  const alertRightRef = useRef(null);

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

  return (
    <div className="alert-right">
      <div className="alert-rightCard">
        <div
          className={`alert-rightTextCard ${
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
  );
};

export default AiPrompt;
