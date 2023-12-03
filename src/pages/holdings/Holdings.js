import React from "react";
import "./holdings.css";
import { HoldingsTable, PieChartHoldings } from "../../components";
const Holdings = () => {
  const isMobile = window.innerWidth < 426;

  return (
    <div className="holdingCardContainer">
      <div className="holdingCard">
        <div className="holdingCardTop">
          {isMobile ? (
            <>
              <div className="holdingCardRight">
                <div className="pieContainer">
                  <div className="pieChartContainer">
                    <PieChartHoldings />
                  </div>
                </div>
              </div>
              <div className="holdingCardLeft">
                <div className="portfolioValue">
                  <p>Portfolio value</p>
                  <div className="no-text">
                    <div className="n-text">
                      <p>N</p>
                    </div>
                    <div className="o-text">
                      <p>O</p>
                    </div>
                  </div>
                </div>
                <div className="totalInvested">
                  <p>Total Invested</p>
                  <div className="no-text">
                    <div className="n-text">
                      <p>N</p>
                    </div>
                    <div className="o-text">
                      <p>O</p>
                    </div>
                  </div>
                </div>
                <div className="profitLoss">
                  <p>Profit & Loss</p>
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
            </>
          ) : (
            <>
              <div className="holdingCardLeft">
                <div className="portfolioValue">
                  <p>Portfolio value</p>
                  <div className="no-text">
                    <div className="n-text">
                      <p>N</p>
                    </div>
                    <div className="o-text">
                      <p>O</p>
                    </div>
                  </div>
                </div>
                <div className="totalInvested">
                  <p>Total Invested</p>
                  <div className="no-text">
                    <div className="n-text">
                      <p>N</p>
                    </div>
                    <div className="o-text">
                      <p>O</p>
                    </div>
                  </div>
                </div>
                <div className="profitLoss">
                  <p>Profit & Loss</p>
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
              <div className="holdingCardRight">
                <div className="pieContainer">
                  <div className="pieChartContainer">
                    <PieChartHoldings />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="holdingTable">
          <HoldingsTable />
        </div>
      </div>
    </div>
  );
};

export default Holdings;
