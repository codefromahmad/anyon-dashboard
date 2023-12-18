import React, { useState } from "react";
import "./home.css";
import walletImage from "../../assets/images/walletImage.svg";
import invite from "../../assets/images/invite.svg";
import currentValues from "../../assets/images/currentValues.svg";
import { MarketOverview, ProfitLossChart } from "../../components";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedValue, setSelectedValue] = useState("Positions");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="rounded-card-container">
      <div className="rounded-card">
        <div className="home-card-header">
          <h2>Hi, Ademola</h2>
        </div>
        <div className="card-body">
          <div className="cards-container">
            <div className="equity-container">
              <div className="equity-card-header">
                <p className="heading">Equity</p>
                <p className="opening-balance">
                  Opening balance <span className="balance">0</span>
                </p>
              </div>
              <div className="homeNoTextEquity">
                <div className="no-text">
                  <div className="n-text">
                    <p>N</p>
                  </div>
                  <div className="o-text">
                    <p>O</p>
                  </div>
                </div>
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
                  <img src={walletImage} alt="wallet" />
                  <div className="right-item">
                    <p>Wallet</p>
                    <p className="info">
                      Add money to your wallet to trade, invest and save.
                    </p>
                    <Link to="/wallet/addfunds">
                      <button>+ Add Funds</button>
                    </Link>
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
              <div className="selectorDiv">
                <select
                  className="selector"
                  value={selectedValue}
                  onChange={handleSelectChange}
                >
                  <option value="Current Value">Current Value</option>
                  <option value="Positions">Positions</option>
                </select>
              </div>
            </div>
            <div className="holdings-card-body">
              <div className="homeNoText">
                <div className="no-text">
                  <div className="n-text">
                    <p>N</p>
                  </div>
                  <div className="o-text">
                    <p>O</p>
                  </div>
                </div>
              </div>
              <div className="profit-loss-container">
                {selectedValue === "Current Value" ? (
                  <img src={currentValues} alt="current" />
                ) : (
                  <ProfitLossChart />
                )}
              </div>
            </div>
          </div>

          <div className="holdings-container">
            <div className="holdings-card-header">
              <div className="holdings-left-header">
                <p className="heading">Market Overview</p>
              </div>
              <div className="portfolioMarket">
                <div className="item">
                  <div className="green"></div>
                  <p>Market</p>
                </div>
                <div className="item">
                  <div className="yellow"></div>
                  <p>Portfolio</p>
                </div>
              </div>
            </div>
            <div className="market-card-body">
              <MarketOverview />
            </div>
          </div>
          <div className="inviteContainer">
            <div className="inviteWrapper">
              <img src={invite} alt="wallet" />
              <div>
                <p className="inviteText">
                  Invite friends and family and get rewarded!
                </p>
                <button className="inviteBtn">Refer</button>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
