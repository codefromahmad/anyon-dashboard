import React, { useState } from "react";
import "./alertmanual.css";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
import { ChatInput } from "../../components";
import MobileAlertManual from "../../components/MobileAlertManual/MobileAlertManual";
import { LuHistory } from "react-icons/lu";

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
    <>
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
            <div className="alertRightTextCard">
              <div className="alert-manual">
                <div className="alert-manual-card">
                  <div className="createAlertHeading">
                    <h4>Create Alert</h4>
                  </div>
                  <div className="alert-name">
                    <p>Name</p>
                    <div className="nameSelect">
                      <select id="Name">
                        <option value="">Alert 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="alert-discription">
                    <p>Discription</p>
                    <div className="discription-text">
                      <input
                        className="textArea"
                        type="text"
                        rows={3}
                        multiple={true}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="alert-instrument">
                    <p>Instrument</p>
                    <div className="instrumentSelect">
                      <select id="Instrument">
                        <option value="">BLS FINANCIAL SERVICES</option>
                      </select>
                    </div>
                  </div>
                  <div className="alert-price">
                    <p>Price</p>
                    <div className="price-mid">
                      <div className="price-select">
                        <select id="Price">
                          <option value="Price">Price</option>
                        </select>
                      </div>
                      <div className="above-select">
                        <select id="above">
                          <option value="above">above</option>
                        </select>
                      </div>
                      <div className="price-input">
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="alertPriceBottom">
                      <p>%change</p>
                    </div>
                  </div>
                  <div className="alert-volume">
                    <p>Volume</p>
                    <div className="volume-mid">
                      <div className="price-select">
                        <select id="Price">
                          <option value="Price">Price</option>
                        </select>
                      </div>
                      <div className="above-select">
                        <select id="above">
                          <option value="above">above</option>
                        </select>
                      </div>
                      <div className="volume-input">
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                  </div>
                  <div className="alert-schedule">
                    <p>Schedule</p>
                    <div className="scheduleSelect">
                      <select id="Schedule">
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                  <div className="alertManualButtons">
                    <div className="proceed-button">
                      <p>Proceed</p>
                    </div>
                    <div className="cancel-button">
                      <p>Cancel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileManual">
      <div className="mobileAlertTop">
      <div className="historyIcon">
        <LuHistory />
      </div>
        <div className="aiPromptButtons">
          <div className="aiButton">
            <p>AI</p>
          </div>
          <div className="manualButton">
            <p>Manual</p>
          </div>
        </div>
      </div>
        <MobileAlertManual/>
      </div>
    </>
  );
};

export default AlertManual;
