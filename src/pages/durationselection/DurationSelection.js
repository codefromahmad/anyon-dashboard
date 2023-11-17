import React from "react";
import "./durationselection.css";
import { Link } from "react-router-dom";

const DurationSelection = () => {
  return (
    <div className="rounded-card">
      <div className="durationSelectionCard">
        <div className="durationSelectionText">
          <p>How long do you want to lock savings?</p>
        </div>
        <div className="durationCards">
          <div className="durationCard">
            <a>30 days</a>
            <div className="percentage">
              <p>5% p/a</p>
            </div>
          </div>
          <div className="durationCard">
            <a>60 days</a>
            <div className="percentage">
              <p>5% p/a</p>
            </div>
          </div>
          <div className="durationCard">
            <a>120 days</a>
            <div className="percentage">
              <p>5% p/a</p>
            </div>
          </div>
          <div className="durationCard">
            <a>1 year</a>
            <div className="percentage">
              <p>5% p/a</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurationSelection;
