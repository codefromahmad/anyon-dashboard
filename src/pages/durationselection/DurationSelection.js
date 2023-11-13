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
            <Link to="/wallet/savinglock/durationselection/dayslock"><a>30 days</a></Link>
            <div className="percentage">
              <p>5% p/a</p>
            </div>
          </div>
          <div className="durationCard">
            <p>60 days</p>
            <div className="percentage">
              <p>5% p/a</p>
            </div>
          </div>
          <div className="durationCard">
            <p>120 days</p>
            <div className="percentage">
              <p>5% p/a</p>
            </div>
          </div>
          <div className="durationCard">
            <p>1 year</p>
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
