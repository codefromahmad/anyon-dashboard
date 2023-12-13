import { useState } from "react";
import "./marketstabs.css";
import { IoExpand } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function MarketsTabs({ links, expand }) {
  const [openTab, setOpenTab] = useState(links[0].name);
  const dispatch = useDispatch();

  const handleExpand = () => {
    dispatch({ type: "setExpanded", payload: true });
  };

  return (
    <div>
      <div className={`gridMarketsContainer ${expand && "bottomBorder"}`}>
        <ul className={`${expand ? "gridMarketsExpand" : "gridMarkets"}`}>
          {links.map((tab) => (
            <li
              onClick={() => setOpenTab(tab.name)}
              className={`gridItem ${
                tab.name === openTab ? "gridActive" : "gridNonactive"
              } ${expand && "width75"}`}
            >
              <span className={`itemName `}>{tab.name}</span>
            </li>
          ))}
          {!expand ? (
            <li className="expandLi">
              <div className="expandContainer" onClick={handleExpand}>
                <IoExpand className="expand" />
              </div>
            </li>
          ) : null}
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
