import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import home from "../../assets/images/menu/home.svg";
import homeActive from "../../assets/images/menu/home-active.svg";
import markets from "../../assets/images/menu/markets.svg";
import marketsActive from "../../assets/images/menu/markets-active.svg";
import holdings from "../../assets/images/menu/holdings.svg";
import holdingsActive from "../../assets/images/menu/holdings-active.svg";
import wallet from "../../assets/images/menu/wallet.svg";
import walletActive from "../../assets/images/menu/wallet-active.svg";
import alert from "../../assets/images/menu/alert.svg";
import alertActive from "../../assets/images/menu/alert-active.svg";
import apps from "../../assets/images/menu/apps.svg";
import appsActive from "../../assets/images/menu/apps-active.svg";
import logo from "../../assets/images/logo.svg";

const Sidebar = () => {
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
      active: pathname === "/markets",
      path: "/markets",
    },
    {
      name: "Holdings",
      img: holdings,
      activeImage: holdingsActive,
      active: pathname === "/holdings",
      path: "/holdings",
    },
    {
      name: "Wallet",
      img: wallet,
      activeImage: walletActive,
      active: pathname === "/wallet",
      path: "/wallet",
    },
    {
      name: "Alert",
      img: alert,
      activeImage: alertActive,
      active: pathname === "/alert",
      path: "/alert",
    },
    {
      name: "Apps",
      img: apps,
      activeImage: appsActive,
      active: pathname === "/apps",
      path: "/apps",
    },
  ];

  return (
    <div className="sidebar-container">
      <div className="user-profile-container">
        <img className="user-profile" src={logo} alt="Profile Picture" />
      </div>
      <div className="item-list">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <Link to={item.path} className="menu-item">
              <img
                src={item.active ? item.activeImage : item.img}
                alt={`${item.name} Logo`}
              />
              <span className="item-name">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
