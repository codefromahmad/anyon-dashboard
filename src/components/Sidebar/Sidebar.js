import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import home from "../../assets/images/home.svg";
import markets from "../../assets/images/markets.svg";
import holdings from "../../assets/images/holdings.svg";
import wallet from "../../assets/images/wallet.svg";
import alert from "../../assets/images/alert.svg";
import apps from "../../assets/images/apps.svg";
import logo from "../../assets/images/logo.svg";

const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Home",
      img: home,
      path: "/",
    },
    {
      name: "Markets",
      img: markets,
      path: "/markets",
    },
    {
      name: "Holdings",
      img: holdings,
      path: "/holdings",
    },
    {
      name: "Wallet",
      img: wallet,
      path: "/wallet",
    },
    {
      name: "Alert",
      img: alert,
      path: "/alert",
    },
    {
      name: "Apps",
      img: apps,
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
              <img src={item.img} alt={`${item.name} Logo`} />
              <span className="item-name">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
