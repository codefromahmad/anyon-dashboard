import React, { useState } from "react";
import "./privacysecurity.css";

const PrivacySecurity = () => {
  const [textMessage, setTextMessage] = useState(true);
  const [authentication, setAuthentication] = useState(true);

  const handleTextMessage = () => {
    setTextMessage(!textMessage);
  };

  const handleAuthentication = () => {
    setAuthentication(!authentication);
  };
  return (
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
        {textMessage ? (
          <div onClick={handleTextMessage} className="greenDiv">
            <div className="whiteDiv"></div>
          </div>
        ) : (
          <div onClick={handleTextMessage} className="greyDiv">
            <div className="greyWhiteDiv"></div>
          </div>
        )}
      </div>
      <div className="privacySecurityMidDiv">
        <div className="textMessageDiv">
          <h3>Authentication app (Recommended)</h3>
          <p>
            Use Google authenticator to generate verification codes for secure
            login
          </p>
        </div>
        {authentication ? (
          <div onClick={handleAuthentication} className="greyDiv">
            <div className="greyWhiteDiv"></div>
          </div>
        ) : (
          <div onClick={handleAuthentication} className="greenDiv">
            <div className="whiteDiv"></div>
          </div>
        )}
      </div>
      <div className="changePasswordDiv">
        <h3>Change password</h3>
        <a>Change your password here</a>
      </div>
    </div>
  );
};

export default PrivacySecurity;
