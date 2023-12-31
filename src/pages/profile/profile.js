import React from "react";
import "./profile.css";
import { IoIosArrowForward } from "react-icons/io";
import { TabsComponent } from "../../components";

import {
  MyAccount,
  AccountInformation,
  PrivacySecurity,
  HelpSupport,
  Payment,
} from "../../components";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  console.log("pathname", pathname);

  const profile = useSelector((state) => state.page.profile);

  const data = [
    {
      id: 1,
      name: "Profile",
      path: "/profile",
      content: <MyAccount />,
    },
    {
      id: 2,
      name: "Account Information",
      path: "/accountinformation",
      content: <AccountInformation />,
    },
    {
      id: 3,
      name: "Privacy & Security",
      path: "/privacysecurity",
      content: <PrivacySecurity />,
    },
    {
      id: 4,
      name: "Help & Support",
      path: "/helpsupport",
      content: <HelpSupport />,
    },
    {
      id: 5,
      name: "Payment",
      path: "/payment",
      content: <Payment />,
    },
  ];

  const handleProfileActiveOnMobile = () => {
    dispatch({ type: "setProfile", payload: true });
  };

  return (
    <div className="rounded-card-container">
      <div className="rounded-card">
        <div className="for-laptop">
          <TabsComponent data={data} />
        </div>

        <div className="for-mobile">
          {profile && <MyAccount />}
          {pathname.startsWith("/accountinformation") && <AccountInformation />}

          {pathname.startsWith("/privacysecurity") && <PrivacySecurity />}
          {pathname === "/helpsupport" && <HelpSupport />}
          {pathname.startsWith("/payment") && <Payment />}
        </div>

        {!profile && pathname === "/profile" && (
          <div className="accountSettingDiv">
            <div className="accountSettingHeading">
              <h3>Account Setting</h3>
            </div>
            <div className="accountSettingCards">
              <Link
                onClick={handleProfileActiveOnMobile}
                to={"/profile"}
                className="accountSettingCard"
              >
                <p>Profile</p>
                <IoIosArrowForward />
              </Link>
              <Link
                onClick={() =>
                  dispatch({
                    type: "setAccountInformation",
                    payload: "accountInformation",
                  })
                }
                to={"/accountinformation"}
                className="accountSettingCard"
              >
                <p>Account Information</p>
                <IoIosArrowForward />
              </Link>
              <Link to={"/privacysecurity"} className="accountSettingCard">
                <p>Privacy & Security</p>
                <IoIosArrowForward />
              </Link>
              <Link to={"/helpsupport"} className="accountSettingCard">
                <p>Help & Support</p>
                <IoIosArrowForward />
              </Link>
              <Link to={"/payment"} className="accountSettingCard">
                <p>Payment</p>
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
