import { useState } from "react";
import "./tabscomponent.css";
import { Link, useLocation } from "react-router-dom";

export default function TabsComponent({
  setAccountInformation,
  setChangePassword,
  setAddBank,
  openTab,
  setOpenTab,
  data,
}) {
  const handleTabClick = (path) => {
    setOpenTab(path);
    setChangePassword(false);
    setAddBank(false);
    setAccountInformation("");
  };
  return (
    <div>
      <div className="grid-container">
        <ul className="grid">
          {data.map((tab) => (
            <Link
              to={tab.path}
              onClick={() => handleTabClick(tab.path)}
              className={`item-name ${
                tab.path === openTab ? "grid-active" : "grid-nonactive"
              }`}
            >
              <li className={`grid-item `}>{tab.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      {data.map((tab) => (
        <div
          key={tab.name}
          className={tab.path === openTab ? "block" : "hidden"}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
