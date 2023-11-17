import { useState } from "react";
import "./tabscomponent.css";

export default function TabsComponent({ links }) {
  const [openTab, setOpenTab] = useState(links[0].name);

  return (
    <div>
      <div className="grid-container">
        <ul className="grid">
          {links.map((tab) => (
            <li
              className={`grid-item ${
                tab.name === openTab ? "grid-active" : "grid-nonactive"
              }`}
            >
              <span
                onClick={() => setOpenTab(tab.name)}
                className={`item-name `}
              >
                {tab.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {links.map((tab) => (
        <div
          key={tab.name}
          className={tab.name === openTab ? "block" : "hidden"}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
