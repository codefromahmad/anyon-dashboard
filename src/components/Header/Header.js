import React from "react";
import "./header.css";
import { FaChevronDown } from "react-icons/fa";
import profilePicture from "../../assets/images/profile-picture.jpeg";
import bellIcon from "../../assets/images/bellicon.svg";
import { IoIosMenu } from "react-icons/io";
import { GoBell } from "react-icons/go";

const Header = ({ toggleMenu }) => {
  const pathname = "/wallet";
  return (
    <div className="header">
      <div className="left-header">
        <button className="menu-button" onClick={toggleMenu}>
          <IoIosMenu className="menu-icon" />
        </button>
        <p>Wallet</p>
      </div>
      <div className="left-side">{pathname && <p>Wallet</p>}</div>
      <div className="right-header">
        {/* <div className="bell-icon">
          <img src={bellIcon} />
        </div> */}
        <GoBell className="bell-icon" />
        <div className="profile-dropdown">
          <div className="profile-imageContainer">
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="profile-image"
            />
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
