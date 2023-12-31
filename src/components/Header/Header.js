import React, { useEffect, useState } from "react";
import "./header.css";
import { FaChevronDown } from "react-icons/fa";
import profilePicture from "../../assets/images/profile-picture.jpeg";
// import bellIcon from "../../assets/images/bellicon.svg";
import { IoIosMenu } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileIcon from "../../assets/images/menu/profile-icon.svg";
import supportIcon from "../../assets/images/menu/support-icon.svg";
import logoutIcon from "../../assets/images/menu/logout-icon.svg";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardBackspace } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

const Header = ({ toggleMenu, dropdownMenu, setDropdownMenu }) => {
  const [headerTitle, setHeaderTitle] = useState("");
  const [backButton, setBackButton] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const history = useSelector((state) => state.page.history);
  const profile = useSelector((state) => state.page.profile);
  const changePassword = useSelector((state) => state.page.changePassword);
  const walletPage = useSelector((state) => state.page.walletPage);
  const lockup = useSelector((state) => state.page.lockup);
  const accountInformation = useSelector(
    (state) => state.page.accountInformation
  );
  const addBank = useSelector((state) => state.page.addBank);
  console.log("dropdownMenu", dropdownMenu);
  const screenWidth = window.innerWidth;
  const expanded = useSelector((state) => state.page.expanded);

  useEffect(() => {
    setBackButton(false);
    const handleResize = () => {
      if (screenWidth > 425) {
        console.log("Its desktop screen", pathname);
        if (pathname === "/profile") {
          setHeaderTitle("My Account");
        } else if (pathname === "/accountinformation") {
          dispatch({
            type: "setAccountInformation",
            payload: "accountInformation",
          });
          setHeaderTitle("Account Information");
        } else if (pathname === "/accountinformation/proofofid") {
          setBackButton(true);
          setHeaderTitle("Proof of ID");
        } else if (pathname === "/accountinformation/proofofaddress") {
          setBackButton(true);
          setHeaderTitle("Proof of Address");
        } else if (pathname === "/accountinformation/uploadphotograph") {
          setBackButton(true);
          setHeaderTitle("Upload Photograph");
        } else if (pathname === "/privacysecurity") {
          setHeaderTitle("Privacy Security");
        } else if (pathname === "/privacysecurity/changepassword") {
          setBackButton(true);
          setHeaderTitle("Change Password");
        } else if (pathname === "/helpsupport") {
          setHeaderTitle("Help Support");
        } else if (pathname === "/payment") {
          setHeaderTitle("Payment");
        } else if (pathname === "/payment/addbank") {
          dispatch({ type: "setAddBank", payload: true });
          setBackButton(true);
          setHeaderTitle("Add Bank");
        }
      } else {
        console.log("Its mobile screen");
        if (pathname === "/profile") {
          setHeaderTitle("My Account");
        } else if (pathname === "/accountinformation") {
          setBackButton(true);
          setHeaderTitle("Account Information");
        } else if (pathname === "/privacysecurity") {
          setBackButton(true);
          setHeaderTitle("Privacy Security");
        } else if (pathname === "/helpsupport") {
          setBackButton(true);
          setHeaderTitle("Help Support");
        } else if (pathname === "/payment") {
          setBackButton(true);
          setHeaderTitle("Payment");
        }
      }
      if (pathname === "/alert" || pathname === "/alertmanual") {
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
      } else if (pathname === "/holdings") {
        setHeaderTitle("Holdings");
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
    if (lockup) {
      dispatch({ type: "setLockup", payload: false });
      setBackButton(false);
    } else if (screenWidth < 426) {
      if (history) {
        dispatch({ type: "setHistory", payload: false });
        setBackButton(false);
        setHeaderTitle("Alert");
      } else if (profile) {
        dispatch({ type: "setProfile", payload: false });
        setBackButton(false);
        setHeaderTitle("My Account");
      } else if (changePassword) {
        dispatch({ type: "setChangePassword", payload: false });
        setBackButton(true);
        navigate(-1);
        setHeaderTitle("Privacy Security");
      } else if (addBank) {
        dispatch({ type: "setAddBank", payload: false });
        setBackButton(true);
        navigate(-1);
        setHeaderTitle("Payment");
      } else if (accountInformation === "accountInformation") {
        dispatch({ type: "setAccountInformation", payload: "" });
        setBackButton(false);
        navigate(-1);
        setHeaderTitle("My Account");
      } else if (accountInformation === "ProofOfID") {
        dispatch({
          type: "setAccountInformation",
          payload: "accountInformation",
        });
        navigate(-1);
        setHeaderTitle("Account Information");
      } else if (accountInformation === "ProofOfAddress") {
        dispatch({
          type: "setAccountInformation",
          payload: "accountInformation",
        });
        navigate(-1);
        setHeaderTitle("Account Information");
      } else if (accountInformation === "UploadPhotograph") {
        dispatch({
          type: "setAccountInformation",
          payload: "accountInformation",
        });
        navigate(-1);
        setHeaderTitle("Account Information");
      } else {
        navigate(-1);
      }
    } else {
      if (pathname === "/privacysecurity/changepassword") {
        dispatch({ type: "setChangePassword", payload: false });
        setBackButton(false);
        setHeaderTitle("Privacy Security");
      } else if (pathname === "/payment/addbank") {
        dispatch({ type: "setAddBank", payload: false });
        setBackButton(false);
        setHeaderTitle("Payment");
      }
      navigate(-1);
    }
  };

  const isHomePge = pathname === "/";
  const isMarketsPage = pathname === "/markets";

  useEffect(() => {
    if (screenWidth < 426) {
      if (history) {
        setHeaderTitle("History");
        setBackButton(true);
      } else if (!history && pathname === "/alertmanual") {
        setHeaderTitle("Alert");
        setBackButton(false);
      } else if (profile) {
        setBackButton(true);
        setHeaderTitle("Profile");
      } else if (changePassword) {
        setBackButton(true);
        setHeaderTitle("Change Password");
      } else if (addBank) {
        setBackButton(true);
        setHeaderTitle("Add Bank");
      } else if (accountInformation === "accountInformation") {
        setBackButton(true);
        setHeaderTitle("Account Information");
      } else if (accountInformation === "ProofOfID") {
        setBackButton(true);
        setHeaderTitle("Proof of ID");
      } else if (accountInformation === "ProofOfAddress") {
        setBackButton(true);
        setHeaderTitle("Proof of Address");
      } else if (accountInformation === "UploadPhotograph") {
        setBackButton(true);
        setHeaderTitle("Upload Photograph");
      } else if (isHomePge) {
        setHeaderTitle("");
        setBackButton(false);
      }
    } else {
      if (isHomePge || isMarketsPage) {
        setHeaderTitle("");
        setBackButton(false);
      }
    }
    if (walletPage === "wallet" && pathname === "/wallet") {
      setBackButton(false);
      setHeaderTitle("My Wallet");
    } else if (walletPage === "savings" && !lockup && pathname === "/wallet") {
      setBackButton(false);
      setHeaderTitle("Savings Lock");
    } else if (walletPage === "savings" && lockup && pathname === "/wallet") {
      setBackButton(true);
      setHeaderTitle("Lockup History");
    }
  }, [
    history,
    profile,
    changePassword,
    addBank,
    accountInformation,
    screenWidth,
    isHomePge,
    isMarketsPage,
    walletPage,
    lockup,
    pathname,
  ]);

  const handleDropDownClick = (item) => {
    setDropdownMenu(false);
    if (item.path === "/profile") {
      if (window.innerWidth < 426) {
        dispatch({ type: "setProfile", payload: true });
      } else {
        dispatch({ type: "setProfileComp", payload: item.path });
      }
    }
  };

  return (
    <div className="header">
      <div className="left-header">
        <button className="menu-button" onClick={toggleMenu}>
          <IoIosMenu className="menu-icon" />
        </button>
        <div className="backAndTitle">
          {backButton && (
            <MdKeyboardBackspace
              className="back"
              onClick={handleBackButtonClick}
              size={20}
            />
          )}
          {headerTitle && <p>{headerTitle}</p>}
        </div>
      </div>
      <div
        className={`left-side ${
          pathname === "/markets" ||
          pathname === "/marketsai" ||
          pathname === "/technicals"
            ? !expanded
              ? "width-25"
              : ""
            : "pl"
        }`}
      >
        {!expanded && (
          <div className="backAndTitleLaptop">
            {backButton && (
              <MdKeyboardBackspace
                className="back"
                onClick={handleBackButtonClick}
                size={28}
              />
            )}
            {headerTitle && <p>{headerTitle}</p>}
          </div>
        )}

        {!expanded &&
          (pathname === "/markets" || pathname === "/technicals") && (
            <div className="search-bar">
              <FiSearch color="#C3C3C3" />
              <input placeholder="Search" />
            </div>
          )}
      </div>
      {screenWidth > 425 &&
        (pathname === "/alert" || pathname === "/alertmanual") && (
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
      {screenWidth > 425 &&
        (pathname === "/markets" ||
          pathname === "/technicals" ||
          pathname === "/marketsai") && (
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
              onClick={() => handleDropDownClick(item)}
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
