import React from "react";
import "./buysellpopupoverlay.css";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

const BuySellPopUpOverlay = ({ popup, handlePopup, setPopup, value }) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    setPopup(null);
    dispatch({ type: "setConfirm", payload: true });
  };
  return (
    <>
      {popup && <div className="overlayMarkets" />}
      {popup && (
        <div>
          <div className="popup">
            <IoCloseSharp
              onClick={() => setPopup(null)}
              className="closePopup"
            />
            <p
              className={`head ${popup === "buy" ? "greenColor" : "redColor"}`}
            >
              {popup === "buy" ? "Confirm Buy" : "Confirm Sell"}
            </p>
            <p className="lot">( {value} Lot )</p>
            <button
              onClick={handleConfirm}
              className={` ${popup === "buy" ? "greenBack" : "redBack"}`}
            >
              <p>Confirm</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BuySellPopUpOverlay;
