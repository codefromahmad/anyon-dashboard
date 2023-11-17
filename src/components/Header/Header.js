import React, { useEffect, useState } from "react";
import "./header.css";
import { FaChevronDown } from "react-icons/fa";
import profilePicture from "../../assets/images/profile-picture.jpeg";
// import bellIcon from "../../assets/images/bellicon.svg";
import { IoIosMenu } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { useLocation } from "react-router-dom";
import profileIcon from "../../assets/images/menu/profile-icon.svg";
import supportIcon from "../../assets/images/menu/support-icon.svg";
import logoutIcon from "../../assets/images/menu/logout-icon.svg";

const Header = ({ toggleMenu, dropdownMenu, setDropdownMenu }) => {
  const [headerTitle, setHeaderTitle] = useState("");
  const { pathname } = useLocation();
  console.log("dropdownMenu", dropdownMenu);

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

  const dropdown = [
    {
      name: "Profile",
      img: profileIcon,
      path: "/profile",
    },
    {
      name: "Support",
      img: supportIcon,
      path: "/support",
    },
    {
      name: "Log Out",
      img: logoutIcon,
      path: "/logout",
    },
  ];

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
          <div
            onClick={() => setDropdownMenu(true)}
            className="profile-imageContainer"
          >
            <img src={profilePicture} alt="Profile" className="profile-image" />
            <FaChevronDown className="dropdown-icon" />
          </div>
        </div>
      </div>
      {dropdownMenu && (
        <div className="dropdown-content">
          {dropdown.map((item, index) => (
            <div key={index} className="dropdown-item">
              <img src={item.img} alt="Profile" className="dropdown-img" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
