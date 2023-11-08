import React from "react";
import "./header.css";
import { GoBell } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import profilePicture from "../../assets/images/profile-picture.avif";
import bellIcon from "../../assets/images/bellicon.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="bell-icon">
        <img src={bellIcon} />
      </div>
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
  );
};

export default Header;
