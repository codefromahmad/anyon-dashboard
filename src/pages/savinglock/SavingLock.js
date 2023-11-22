import React, { useState } from "react";
import "./savinglock.css";
import SavingLockImg from "../../assets/images/security-safe.svg";
import { Link } from "react-router-dom";

const SavingLock = () => {
  const [active, setActive] = useState("ongoing");

  const locks = [
    {
      title: "Yearly Save",
      amount: "N 600,000",
      duration: "60 days",
      interestRate: "10%",
    },
    {
      title: "Monthly Save",
      amount: "N 600,000",
      duration: "30 days",
      interestRate: "5%",
    },
  ];

  return (
    <div className="rounded-card">
      <div className="savingLockCard">
        <div className="savingLockTop">
          <div className="savingLockHeading">
            <img src={SavingLockImg} alt="saving lock" />
            <h4>Saving lock</h4>
          </div>
          <div className="createButton">
            <Link to="/wallet/savinglock/durationselection">
              <a href="#">+Create</a>
            </Link>
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
          <div className="savingLockRight">
            <div className="savingHeader">
              <p>History</p>
              <div className="savingOptions">
                <div
                  onClick={() => setActive("ongoing")}
                  className={`${
                    active === "ongoing"
                      ? "active-middle-item"
                      : "nonactive-middle-item"
                  }`}
                >
                  <p>Ongoing</p>
                </div>
                <div
                  onClick={() => setActive("completed")}
                  className={`${
                    active === "completed"
                      ? "active-middle-item"
                      : "nonactive-middle-item"
                  }`}
                >
                  <p>Completed</p>
                </div>
              </div>
            </div>
            <table className="lock-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Duration</th>
                  <th>Interest rate %</th>
                </tr>
              </thead>
              <tbody>
                {locks.map((position, index) => (
                  <tr key={index}>
                    <td>{position.title}</td>
                    <td>{position.amount}</td>
                    <td>{position.duration}</td>
                    <td>{position.interestRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingLock;
