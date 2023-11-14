import React, { useState } from "react";
import "./home.css";
import walletImage from "../../assets/images/walletImage.svg";
import currentValues from "../../assets/images/currentValues.svg";
import ColumnGraph from "../../components/ColumnGraph";
import { MarketOverview } from "../../components";

const Home = () => {
  const [selectedValue, setSelectedValue] = useState("Positions");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const data = [
    { time: "2023-09-03", value: 12 },
    { time: "2023-10-02", value: -15 },
    { time: "2023-10-11", value: 5 },
    { time: "2023-11-01", value: 50 },
    { time: "2023-11-07", value: -12 },
    { time: "2023-11-21", value: -30 },
    { time: "2023-11-22", value: 30 },
    // Add more data points as needed
  ];

  return (
    <div className="rounded-card">
      <div className="card-header ph-l">
        <h2>Hi, Ademola</h2>
      </div>
      <div className="card-body ph-l">
        <div className="cards-container">
          <div className="equity-container">
            <div className="equity-card-header">
              <p className="heading">Equity</p>
              <p className="opening-balance">
                Opening balance <span className="balance">0</span>
              </p>
            </div>
            <div className="equity-card-body">
              <p>NO</p>
            </div>
          </div>
          <div className="wallet-container">
            <div className="wallet-card-header">
              <p className="heading">Wallet</p>
              <p className="wallet-balance">
                Wallet balance <span className="balance">N 20,000</span>
              </p>
            </div>
            <div className="wallet-card-body">
              <div className="wallet-row">
                <img src={walletImage} alt="wallet image" />
                <div className="right-item">
                  <p>Wallet</p>
                  <p className="info">
                    Add money to your wallet to trade, invest and save.
                  </p>
                  <button>+ Add Funds</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="holdings-container">
          <div className="holdings-card-header">
            <div className="holdings-left-header">
              <p className="heading">Holdings</p>
              <p className="additional-heading">
                Current Value <span className="balance">0</span>
              </p>
              <p className="additional-heading">
                Positions <span className="balance">0</span>
              </p>
            </div>
            <select
              className="selector"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="Current Value">Current Value</option>
              <option value="Positions">Positions</option>
            </select>
          </div>
          <div className="holdings-card-body">
            <p>NO</p>
            {selectedValue === "Current Value" ? (
              <img src={currentValues} alt="wallet image" />
            ) : (
              <ColumnGraph data={data} />
            )}
          </div>
        </div>

        <div className="holdings-container">
          <div className="holdings-card-header">
            <div className="holdings-left-header">
              <p className="heading">Market Overview</p>
            </div>
            <p>something else</p>
          </div>
          <div className="market-card-body">
            <MarketOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
