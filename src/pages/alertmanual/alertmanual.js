import React, { useState } from "react";
import "./alertmanual.css";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
import { ChatInput } from "../../components";

const alerts = [
  {
    symbol: "CAD",
    time: "5:00 PM",
  },
  {
    symbol: "USD",
    time: "3:00 PM",
  },
];

const AlertManual = () => {
  return (
    <div className="alertCard">
      <div className="alertLeft">
        <div className="alertLeftTop"></div>
        <div className="alertLeftBottom">
          <h4>Alert</h4>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr key={index}>
                  <td>{alert.symbol}</td>
                  <td>{alert.time}</td>
                  <td>
                    <img src={editIcon} alt="Alert" />
                    <img src={deleteIcon} alt="Alert" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="alertRight">
        <div className="alertRightCard">
          <div className="alertRightTextCard"></div>
        </div>
      </div>
    </div>
  );
};

export default AlertManual;
