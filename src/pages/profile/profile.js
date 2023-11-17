import React from "react";
import {
  AccountInformation,
  MyAccount,
  PrivacySecurity,
} from "../../components";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import ProofOfID from "../../components/ProofOfID/ProofOfID";
import ProofOfAddress from "../../components/ProofOfAddres/ProofOfAddress";

const Profile = () => {
  const tabData = [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }];
  return (
    <div className="App">
      <MyAccount />
      <AccountInformation />
      <PrivacySecurity />
      <ChangePassword />
      <ProofOfID />
      <ProofOfAddress />
    </div>
  );
};

export default Profile;
