import { useState } from "react";
import "./marketstabs.css";
import { IoExpand } from "react-icons/io5";

export default function MarketsTabs({ links }) {
  const [openTab, setOpenTab] = useState(links[0].name);

  return (
    <div>
      <div className="gridMarketsContainer">
        <ul className="gridMarkets">
          {links.map((tab) => (
            <li
              className={`gridItem ${
                tab.name === openTab ? "gridActive" : "gridNonactive"
              }`}
            >
              <span
                onClick={() => setOpenTab(tab.name)}
                className={`itemName `}
              >
                {tab.name}
              </span>
            </li>
          ))}
          <li className="expandLi">
            <div className="expandContainer">
              <IoExpand className="expand" />
            </div>
          </li>
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