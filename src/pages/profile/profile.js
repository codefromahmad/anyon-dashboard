import React from "react";
import "./profile.css";
import {
  AccountInformation,
  MyAccount,
  PrivacySecurity,
  TabsComponent,
} from "../../components";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import ProofOfID from "../../components/ProofOfID/ProofOfID";
import ProofOfAddress from "../../components/ProofOfAddres/ProofOfAddress";

const Profile = () => {
  const data = [
    {
      id: 1,
      name: "Profile",
      content: <MyAccount />,
    },
    {
      id: 2,
      name: "Account Information",
      content: <AccountInformation />,
    },
    {
      id: 3,
      name: "Privacy & Security",
      content: <PrivacySecurity />,
    },
    {
      id: 4,
      name: "Help & Support",
      content: <AccountInformation />,
    },
    {
      id: 5,
      name: "Payment",
      content: <AccountInformation />,
    },
  ];
  return (
    <div>
      <div className="rounded-card">
        <div className="">
          <TabsComponent links={data} />
        </div>
      </div>

      {/* <MyAccount />
      <AccountInformation />
      <PrivacySecurity />
      <ChangePassword />
      <ProofOfID />
      <ProofOfAddress /> */}
    </div>
  );
};

export default Profile;
