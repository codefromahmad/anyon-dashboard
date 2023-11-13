import React from "react";
import "./withdrawotp.css";

const WithdrawOTP = () => {
  return (
    <div className="rounded-card">
      <div className="otpCard">
        <div className="otpHeading">
          <h4>Enter OTP</h4>
        </div>
        <div className="otpText">
          <p>Lorem ipsum dolor sit amet consectetur. Arcu.</p>
        </div>
        <div className="otpCards">
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
          <div className="card1"></div>
        </div>
        <div className="confirmButton">
          <a>Confirm</a>
        </div>
        <div className="otpCardBottom">
          <p>Didn't recieve pin? </p>
          <div className="resendText">
            <p>Resend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawOTP;
