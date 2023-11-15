import React from "react";
import "./savinglock.css";
import SavingLockImg from "../../assets/images/security-safe.svg";
import { Link } from "react-router-dom";


const SavingLock = () => {
  return (
    <div className="rounded-card">
      <div className="savingLockCard">
        <div className="savingLockTop">
          <div className="savingLockHeading">
            <img src={SavingLockImg} alt="saving lock" />
            <h4>Saving lock</h4>
          </div>
          <div className="createButton">
            <Link to="/wallet/savinglock/durationselection"><a href="#">+Create</a></Link>
          </div>
        </div>
        <div className="savingLockBottom">
          <div className="savingLockLeft">
            <div className="lockWalletCard">
              <div className="lockWalletTop">
                <p>Lock wallet</p>
                <div className="contentdiv">
                  <p>+5.0% in the last 30 days</p>
                </div>
              </div>
              <div className="noText">
                <p>N</p>
                <p>O</p>
              </div>
            </div>
            <div className="interestRateText">
              <p>Interest text</p>
              <h4>5% - 15% p/a</h4>
            </div>
          </div>
          <div className="savingLockRight">History</div>
        </div>
      </div>
    </div>
  );
};

export default SavingLock;
