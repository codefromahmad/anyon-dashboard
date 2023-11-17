import React from "react";
import "./privacysecurity.css";

const PrivacySecurity = () => {
  return (
    <div className="rounded-card">
      <div className="privacySecurityCard">
        <div className="twoFactorAuthentication">
          <h3>Two-Factor Authentication</h3>
          <p>
            Select your preferred option for receiving one time passwords (OTPs)
          </p>
        </div>
        <div className="privacySecurityMidDiv">
          <div className="textMessageDiv">
            <h3>Text message (SMS)</h3>
            <p>
              Use text messages to receive verification codes for added
              protection.
            </p>
          </div>
          <div className="greenDiv">
            <div className="whiteDiv"></div>
          </div>
        </div>
        <div className="privacySecurityMidDiv">
          <div className="textMessageDiv">
            <h3>Authentication app (Recommended)</h3>
            <p>
              Use Google authenticator to generate verification codes for secure
              login
            </p>
          </div>
          <div className="greyDiv">
            <div className="greyWhiteDiv"></div>
          </div>
        </div>
        <div className="changePasswordDiv">
          <h3>Change password</h3>
          <p>Change your password here</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacySecurity;
