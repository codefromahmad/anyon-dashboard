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
import UploadPhotograph from "../../components/UploadPhotograph/UploadPhotograph";
import HelpSupport from "../../components/HelpSupport/HelpSupport";
import Payment from "../../components/Payment/Payment";
import AddBankDetail from "../../components/AddBankDetail/AddBankDetail";
import AccountSetting from "../../components/AccountSetting/AccountSetting";

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
      content: <HelpSupport />,
    },
    {
      id: 5,
      name: "Payment",
      content: <Payment />,
    },
  ];
  return (
    <div>
      <div className="rounded-card">
        <div className="">
          <TabsComponent links={data} />
        </div>
      </div>
      {/* <UploadPhotograph />
      <HelpSupport />
      <Payment />
      <AddBankDetail /> */}
      {/* <AccountSetting /> */}

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
