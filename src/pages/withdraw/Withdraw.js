import React from "react";
import "./withdraw.css";
import WithdrawImg from "../../assets/images/Group 172.svg";
import { Link } from "react-router-dom";

const Withdraw = () => {
  return (
    
    <div className="rounded-card">
      <div className="withdrawContainer">
        <div className="withdrawHeading">
          <h4>Withdraw</h4>
        </div>
        <div className="portfolioBalance">
          <p>Portfolio balance</p>
          <div className="portfolioAmount">
            <p>N300,000</p>
          </div>
        </div>
        <div className="withdrawText">
          <p>Kindly enter your bank details and receive your funds</p>
        </div>
        <div className="bankNameCard">
          <p>Bank name</p>
          <div className="branchName">
            <p>First City Bank</p>
          </div>
        </div>
        <div className="accountNumberCard">
          <p>Account number</p>
          <div className="accountNumber">
            <p>4105638472</p>
          </div>
        </div>
        <div className="koredeText">
          <p>Adebayo korede</p>
        </div>
        <div className="enterAmountCard">
          <p>Enter amount</p>
          <div className="enterAmount">
            <div className="enterAmountLeft">
              <img src={WithdrawImg} alt="enter amount"/>
              <p>NGN</p>
            </div>
            <div className="enterAmountRight">
              <p>N</p>
            </div>
          </div>
        </div>
          <div className="withdrawButton">
            <Link to="/wallet/withdraw/otp"><a href="#">Withdraw</a></Link>
          </div>
        <div className="changeDetail">
          <p>+ Change Payment details</p>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
