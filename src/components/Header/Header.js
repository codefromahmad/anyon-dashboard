import React, { useEffect, useState } from "react";
import "./header.css";
import { FaChevronDown } from "react-icons/fa";
import profilePicture from "../../assets/images/profile-picture.jpeg";
// import bellIcon from "../../assets/images/bellicon.svg";
import { IoIosMenu } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { Link, unstable_HistoryRouter, useLocation, useNavigate } from "react-router-dom";
import profileIcon from "../../assets/images/menu/profile-icon.svg";
import supportIcon from "../../assets/images/menu/support-icon.svg";
import logoutIcon from "../../assets/images/menu/logout-icon.svg";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardBackspace } from "react-icons/md";

const Header = ({ toggleMenu, dropdownMenu, setDropdownMenu }) => {
  const [headerTitle, setHeaderTitle] = useState("");
  const [backButton, setBackButton] = useState(false);
  const { pathname } = useLocation();
  console.log("dropdownMenu", dropdownMenu);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 425) {
        if (pathname === "/profile") {
          setHeaderTitle("My Account");
        } else if (pathname === "/accountinformation") {
          setHeaderTitle("Account Information");
        } else if (pathname === "/accountinformation/proofofid") {
          setHeaderTitle("Proof of ID");
        } else if (pathname === "/accountinformation/proofofaddress") {
          setHeaderTitle("Proof of Address");
        } else if (pathname === "/accountinformation/uploadphotograph") {
          setHeaderTitle("Upload Photograph");
        } else if (pathname === "/privacysecurity") {
          setHeaderTitle("Privacy Security");
        } else if (pathname === "/helpsupport") {
          setHeaderTitle("Help Support");
        } else if (pathname === "/payment") {
          setHeaderTitle("Payment");
        }
      } else {
        setHeaderTitle("Its mobile scree");
      }
      if (pathname === "/wallet") {
        setHeaderTitle("Wallet");
      } else if (pathname === "/alert" || pathname === "/alertmanual") {
        setHeaderTitle("Alert");
      } else if (pathname === "/wallet/addfunds") {
        setBackButton(true);
        setHeaderTitle("Add Funds");
      } else if (pathname === "/wallet/withdraw") {
        setBackButton(true);
        setHeaderTitle("Withdraw");
      } else if (pathname.startsWith("/wallet/savinglock")) {
        setBackButton(true);
        setHeaderTitle("Invest");
      } else if (pathname.startsWith("/wallet/addfunds/banktransfer")) {
        setBackButton(true);
        setHeaderTitle("Bank Transfer");
      } else if (pathname.startsWith("/wallet/withdraw/otp")) {
        setBackButton(true);
        setHeaderTitle("Enter OTP");
      } else if (pathname === "/apps") {
        setHeaderTitle("Apps");
      } else {
        setHeaderTitle("");
      }
    };
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  const pathsToCheck = [
    "/accountinformation/proofofid",
    "/accountinformation/proofofaddress",
    "/accountinformation/uploadphotograph",
  ];

  // Check if the current pathname contains any of the specified paths
  const shouldShowBackArrow = pathsToCheck.some((path) =>
    pathname.includes(path)
  );

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

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="header">
      <div className="left-header">
        <button className="menu-button" onClick={toggleMenu}>
          <IoIosMenu className="menu-icon" />
        </button>
        <div className="backAndHeader">
          {backButton && (
            <MdKeyboardBackspace className="back" onClick={handleBackButtonClick} size={20} />
          )}
          {headerTitle && <p>{headerTitle}</p>}
        </div>
      </div>
      <div
        className={`left-side ${
          pathname === "/markets" ||
          pathname === "marketsai" ||
          pathname === "technicals"
            ? "width-25"
            : "pl"
        }`}
      >
        {headerTitle && <p>{headerTitle}</p>}
        {(pathname === "/markets" || pathname === "/technicals") && (
          <div className="search-bar">
            <FiSearch color="#C3C3C3" />
            <input placeholder="Search" />
          </div>
        )}
      </div>
      {(pathname === "/alert" || pathname === "/alertmanual") && (
        <div className="middle-header">
          <Link
            to="/alert"
            className={`${
              pathname === "/alert"
                ? "active-middle-item"
                : "nonactive-middle-item"
            }`}
          >
            <p>AI Prompt</p>
          </Link>
          <Link
            to="/alertmanual"
            className={`${
              pathname === "/alertmanual"
                ? "active-middle-item"
                : "nonactive-middle-item"
            }`}
          >
            <p>Manual</p>
          </Link>
        </div>
      )}
      {(pathname === "/markets" || pathname === "/marketsai") && (
        <div className="middle-header">
          <Link
            to="/technicals"
            className={`${
              pathname === "/technicals"
                ? "active-middle-item"
                : "nonactive-middle-item"
            }`}
          >
            <p>Technicals</p>
          </Link>
          <Link
            to="/markets"
            className={`${
              pathname === "/markets"
                ? "active-middle-item"
                : "nonactive-middle-item"
            }`}
          >
            <p>Simple</p>
          </Link>
          <Link
            to="/marketsai"
            className={`${
              pathname === "/marketsai"
                ? "active-middle-item"
                : "nonactive-middle-item"
            }`}
          >
            <p>AI</p>
          </Link>
        </div>
      )}
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
            <Link
              to={item.path}
              onClick={() => setDropdownMenu(false)}
              key={index}
              className="dropdown-item"
            >
              <img src={item.img} alt={item.name} className="dropdown-img" />
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
