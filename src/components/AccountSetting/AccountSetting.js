import React from "react";
import "./accountsetting.css";
import { IoIosArrowForward } from "react-icons/io";

const AccountSetting = () => {
  return (
    <div className="rounded-card">
      <div className="accountSettingDiv">
        <div className="accountSettingHeading">
          <h3>Account Setting</h3>
        </div>
        <div className="accountSettingCards">
          <div className="accountSettingCard">
            <p>Profile</p>
            <IoIosArrowForward />
          </div>
          <div className="accountSettingCard">
            <p>Account Information</p>
            <IoIosArrowForward />
          </div>
          <div className="accountSettingCard">
            <p>Privacy & Security</p>
            <IoIosArrowForward />
          </div>
          <div className="accountSettingCard">
            <p>Help & Support</p>
            <IoIosArrowForward />
          </div>
          <div className="accountSettingCard">
            <p>Payment</p>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
