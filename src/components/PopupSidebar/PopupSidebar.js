import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./popupsidebar.css";
import home from "../../assets/images/menu/home.svg";
import markets from "../../assets/images/menu/markets.svg";
import holdings from "../../assets/images/menu/holdings.svg";
import wallet from "../../assets/images/menu/wallet.svg";
import alert from "../../assets/images/menu/alert.svg";
import apps from "../../assets/images/menu/apps.svg";
import homeActive from "../../assets/images/menu/home-active.svg";
import marketsActive from "../../assets/images/menu/markets-active.svg";
import holdingsActive from "../../assets/images/menu/holdings-active.svg";
import walletActive from "../../assets/images/menu/wallet-active.svg";
import alertActive from "../../assets/images/menu/alert-active.svg";
import appsActive from "../../assets/images/menu/apps-active.svg";
import logo from "../../assets/images/logo.svg";

const PopupSidebar = ({ handleOpenMenu }) => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const sidebarItems = [
    {
      name: "Home",
      img: home,
      activeImage: homeActive,
      active: pathname === "/",
      path: "/",
    },
    {
      name: "Markets",
      img: markets,
      activeImage: marketsActive,
      active: pathname.startsWith("/markets"),
      path: "/markets",
    },
    {
      name: "Holdings",
      img: holdings,
      activeImage: holdingsActive,
      active: pathname.startsWith("/holdings"),
      path: "/holdings",
    },
    {
      name: "Wallet",
      img: wallet,
      activeImage: walletActive,
      active: pathname.startsWith("/wallet"),
      path: "/wallet",
    },
    {
      name: "Alert",
      img: alert,
      activeImage: alertActive,
      active: pathname.startsWith("/alert"),
      path: "/alert",
    },
    {
      name: "Apps",
      img: apps,
      activeImage: appsActive,
      active: pathname.startsWith("/apps"),
      path: "/apps",
    },
  ];

  return (
    <div className="popupsidebar-container">
      <div className="user-profile-container">
        <Link to="/profile" onClick={handleOpenMenu} className="logo">
          <img className="user-profile" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="item-list">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <Link to={item.path} onClick={handleOpenMenu} className="menu-item">
              <img
                src={item.active ? item.activeImage : item.img}
                alt={`${item.name} Logo`}
              />
              <span className={`item-name ${item.active ? "white" : "grey"}`}>
                {item.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupSidebar;
