import React from "react";
import "./dayslock.css";
import Vector from "../../assets/images/Vector.svg";
import Calendar from "../../assets/images/calendar.svg";

const DaysLock = () => {
  return (
    <div className="rounded-card">
      <div className="daysLockCard">
        <div className="daysLockHeading">
          <h4>30 days lock</h4>
        </div>
        <div className="dayslockText">
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue aliquet gravida
            commodo faucibus
          </p>
        </div>
        <div className="amountToLock">
          <p>Amount to lock</p>
          <div className="amountValue">
            <p>N</p>
          </div>
        </div>
        <div className="titleToLock">
          <p>Title of lock</p>
          <div className="titleValue"></div>
        </div>
        <div className="sourceOfFunding">
          <p>Source of funding</p>
          <div className="funding">
            <p>Wallet</p>
            <img src={Vector} alt="funding"/>
          </div>
        </div>
        <div className="paybackDate">
          <p>Payback date</p>
          <div className="payback">
            <p></p>
            <img src={Calendar} alt="pay back"/>
          </div>
        </div>
        <div className="daysLockButton">
          <p>Complete</p>
        </div>
      </div>
    </div>
  );
};

export default DaysLock;
