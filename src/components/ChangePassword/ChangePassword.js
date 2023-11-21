import React from "react";
import "./changepassword.css";

const ChangePassword = () => {
  return (
    // <div className="rounded-card">
      <div className="changePasswordCard">
        <div className="changePasswordHeading">
          <h3>Change password</h3>
        </div>
        <div className="changePasswordBottom">
          <div className="currentPassword">
            <p>Current Password</p>
            <input type="text" />
          </div>
          <div className="newPassword">
            <p>New Password</p>
            <input type="text" />
          </div>
          <div className="confirmPassword">
            <p>Confirm Password</p>
            <input type="text" />
          </div>
          <div className="saveChangesButton">
            <a>Save changes</a>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ChangePassword;
