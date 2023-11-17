import React from "react";
import { AccountInformation, MyAccount, PrivacySecurity } from "../../components";

const Profile = () => {
  const tabData = [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }];
  return (
    <div className="App">
      <MyAccount />
      <AccountInformation />
      <PrivacySecurity />
    </div>
  );
};

export default Profile;
