import React from "react";
import "./wallet.css";
import investImg from "../../assets/images/Group 282.svg";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <div className="rounded-card">
      <div className="walletCard">
        <div className="walletCardHeader">
          <div className="walletBalanceDiv">
            <div className="wallet-balance-card-top">
              <div className="text">
                <p>Wallet balance</p>
              </div>
              <div className="wallet-balance-card-buttons">
                <div className="withdraw">
                  <Link to="/wallet/withdraw">
                    <a href="#">Withdraw</a>
                  </Link>
                </div>
                <div className="add-funds">
                  <Link to="/wallet/addfunds">
                    <a href="#">Add funds</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="wallet-balance-card-bottom">
              <div className="no-text">
                <div className="n-text">
                  <p>N</p>
                </div>
                <div className="o-text">
                  <p>O</p>
                </div>
              </div>
              <div className="contentDiv">
                <p>+5.0% in the last 30 days</p>
              </div>
            </div>
          </div>
          <div className="walletTwoCards">
            <div className="totalReturnCard">
              <div className="totalReturnText">
                <p>Total return</p>
              </div>
              <div className="totalReturnBottom">
                <div className="no-text">
                  <div className="n-text">
                    <p>N</p>
                  </div>
                  <div className="o-text">
                    <p>O</p>
                  </div>
                </div>
                <div className="smallText">
                  <p>(+5.0%)</p>
                </div>
              </div>
            </div>
            <div className="todaysReturnCard">
              <div className="todaysReturnText">
                <p>Today's return</p>
              </div>
              <div className="todaysReturnBottom">
                <div className="no-text">
                  <div className="n-text">
                    <p>N</p>
                  </div>
                  <div className="o-text">
                    <p>O</p>
                  </div>
                </div>
                <div className="smallText">
                  <p>(+5.0%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="walletCardFooter">
          <div className="investCard">
            <div className="investCardImg">
              <img src={investImg} alt="InvestImg" />
            </div>
            <div className="investCardRight">
              <h3>Grow leftover funds</h3>
              <div className="investCardText">
                <p>
                  Lorem ipsum dolor sit amet consectetur.Augue aliquet gravida
                  commodo faucibus
                </p>
              </div>
              <div className="investButton">
                <Link to="/wallet/savinglock">
                  <a href="#">Invest</a>
                </Link>
              </div>
            </div>
            <div className="investCardBottom">
              <h3>Invest and save with 9ja stocks</h3>
              <div className="investCardBottomText">
                <p>
                  Lorem ipsum dolor sit amet consectetur.Augue aliquet gravida
                  commodo faucibus
                </p>
              </div>
              <div className="investButton">
                <Link to="/wallet/savinglock">
                  <a href="#">Invest</a>
                </Link>
              </div>
            </div>
          </div>
          {/* <div>Invest</div> */}
          <div className="walletGraph">Graph</div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
