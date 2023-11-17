import React from "react";
import MyAccount from "../../components/MyAccount/MyAccount";
import AccountInformation from "../../components/AccountInformation/AccountInformation";
import PrivacySecurity from "../../components/PrivacySecurity/PrivacySecurity";

const Profile = () => {
  const tabData = [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }];
  return (
    <div className="App">
      {/* <MyAccount/> */}
      {/* <AccountInformation/> */}
      <PrivacySecurity/>
    </div>
  );
};

export default Profile;
