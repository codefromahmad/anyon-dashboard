import React, { useState } from "react";
import "./technicalextras.css";
import {
  IoAddCircleOutline,
  IoExpand,
  IoSettingsOutline,
} from "react-icons/io5";
import { BiCandles } from "react-icons/bi";
import { HiChevronDown, HiPencil } from "react-icons/hi2";
import { IoMdContract } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const TechnicalExtras = () => {
  const [isCandle, setIsCandle] = useState(false);
  const expanded = useSelector((state) => state.page.expanded);
  const dispatch = useDispatch();

  const candleOptions = [
    {
      option: <BiCandles color="black" />,
    },
    {
      option: <BiCandles color="black" />,
    },
    {
      option: <BiCandles color="black" />,
    },
  ];

  const handleExpanded = () => {
    dispatch({ type: "setExpanded", payload: !expanded });
  };

  return (
    <div className="technicalsExtra">
      <p>BLS</p>
      <div className="compare">
        <p>Compare</p>
        <IoAddCircleOutline color="black" />
      </div>
      <div className="candleDropdown">
        <div className="candleType" onClick={() => setIsCandle(!isCandle)}>
          <BiCandles color="black" />
          <HiChevronDown color="black" style={{ fontSize: "12px" }} />
        </div>
        {isCandle && (
          <div className="dropdownContent">
            {candleOptions.map((item, index) => (
              <div key={index} className="dropdownOption">
                {item.option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="timeContainer">
        <select id="Price" className="time">
          <option value="1h">1h</option>
          <option value="2h">2h</option>
          <option value="4h">4h</option>
          <option value="1D">1D</option>
          <option value="1W">1W</option>
          <option value="1M">1M</option>
          <option value="1Y">1Y</option>
        </select>
      </div>
      <div className="priceContainer">
        <select id="Price">
          <option value="Price">Indicators</option>
        </select>
      </div>
      <div className="expandContainer">
        <HiPencil className="expand" />
      </div>
      <div className="candleType">
        <IoSettingsOutline color="black" />
        <HiChevronDown color="black" style={{ fontSize: "12px" }} />
      </div>
      <div className="expandContainer" onClick={handleExpanded}>
        {expanded ? (
          <IoMdContract className="expand" />
        ) : (
          <IoExpand className="expand" />
        )}
      </div>
    </div>
  );
};

export default TechnicalExtras;
