import React from "react";
import "./buyselllot.css";
import { useSelector } from "react-redux";

const BuySellLot = ({ showPopup, handleDecrement, handleIncrement, value }) => {
  const expanded = useSelector((state) => state.page.expanded);
  return (
    <div className={`middleHeader ${expanded ? "pExpand" : "pNormal"}`}>
      <div onClick={() => showPopup("buy")} className="buySmallButton">
        <p>Buy</p>
      </div>
      <div className="lotCalculation">
        <p>Lot</p>
        <div>
          <button onClick={handleIncrement}>+</button>
          <input type="text" value={value} readOnly />
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
      <div onClick={() => showPopup("sell")} className="sellSmallButton">
        <p>Sell</p>
      </div>
    </div>
  );
};

export default BuySellLot;
