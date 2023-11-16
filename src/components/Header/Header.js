import React, { useEffect, useState } from "react";
import "./header.css";
import { FaChevronDown } from "react-icons/fa";
import profilePicture from "../../assets/images/profile-picture.jpeg";
// import bellIcon from "../../assets/images/bellicon.svg";
import { IoIosMenu } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { useLocation } from "react-router-dom";

const Header = ({ toggleMenu }) => {
  const [headerTitle, setHeaderTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/wallet") {
      setHeaderTitle("Wallet");
    } else if (pathname.startsWith("/wallet/addfunds")) {
      setHeaderTitle("Add Funds");
    } else if (pathname.startsWith("/wallet/withdraw")) {
      setHeaderTitle("Withdraw");
    } else if (pathname.startsWith("/wallet/savinglock")) {
      setHeaderTitle("Invest");
    }
  }, [pathname]);

  return (
    <div className="header">
      <div className="left-header">
        <button className="menu-button" onClick={toggleMenu}>
          <IoIosMenu className="menu-icon" />
        </button>
        {headerTitle && <p>{headerTitle}</p>}
      </div>
      <div className="left-side">{headerTitle && <p>{headerTitle}</p>}</div>
      <div className="right-header">
        {/* <div className="bell-icon">
          <img src={bellIcon} />
        </div> */}
        <GoBell className="bell-icon" />
        <div className="profile-dropdown">
          <div className="profile-imageContainer">
            <img src={profilePicture} alt="Profile" className="profile-image" />
            <FaChevronDown className="dropdown-icon" />
          </div>
          <div className="dropdown-content">
            {/* Dropdown content can go here */}
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
