import React, { useState } from "react";
import "./wallet.css";
import addFunds from "../../assets/images/addFunds.svg";
import addGreen from "../../assets/images/addGreen.svg";
import naira from "../../assets/images/naira.svg";
import withdraw from "../../assets/images/withdraw.svg";
import coin from "../../assets/images/coin.svg";
import { Link } from "react-router-dom";
import investImg from "../../assets/images/Group 282.svg";
import { MdHistory } from "react-icons/md";
import { LockupHistory, WalletTable } from "../../components";
import { useDispatch, useSelector } from "react-redux";

const Wallet = () => {
  const [sliderValue, setSliderValue] = useState(100);
  const walletPage = useSelector((state) => state.page.walletPage);
  const lockup = useSelector((state) => state.page.lockup);
  const dispatch = useDispatch();

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSelected = (wallet) => {
    dispatch({ type: "setWalletPage", payload: wallet });
    dispatch({ type: "setLockup", payload: false });
  };

  const handleLockup = () => {
    dispatch({ type: "setLockup", payload: true });
  };

  return (
    <div className="rounded-card-container">
      <div className="rounded-card">
        <div className="walletCard">
          <div className="walletCardHeader">
            <div
              onClick={() => handleSelected("wallet")}
              className={`wallet ${walletPage === "wallet" && "borderGreen"}`}
            >
              <p>My Wallet</p>
            </div>
            <div
              onClick={() => handleSelected("savings")}
              className={`savings ${walletPage === "savings" && "borderGreen"}`}
            >
              <p>Savings Lock</p>
            </div>
          </div>
          {walletPage === "wallet" ? (
            <div>
              <div className="addFundsWithdrawMobile">
                <div className="wallet-balance-card-buttons">
                  <div className="add-funds">
                    <img src={addFunds} alt="addFunds" />
                    <Link to="/wallet/addfunds">
                      <a href="#">Add funds</a>
                    </Link>
                  </div>
                  <div className="withdraw">
                    <img src={withdraw} alt="withdraw" />
                    <Link to="/wallet/withdraw">
                      <a href="#">Withdraw</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="walletCardsContainer">
                <div className="balance-container">
                  <div className="balance-card-header">
                    <p className="heading">Total Balance</p>
                  </div>
                  <div className="balance-card-body">
                    <div className="balance-row">
                      <p className="info">$ 5,560,780.25</p>
                    </div>
                  </div>
                </div>
                <div className="funds-container">
                  <div className="funds-card-header">
                    <p className="heading">Total funds</p>
                  </div>
                  <div className="funds-card-body">
                    <div className="funds-row">
                      <p>$ 5,560,780.25</p>
                    </div>
                  </div>
                </div>
                <div className="reserved-container">
                  <div className="reserved-card-header">
                    <p className="heading">Total reserved</p>
                  </div>
                  <div className="reserved-card-body">
                    <div className="reserved-row">
                      <p>$ 5,560,780.25</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="addFundsWithdraw">
                <div className="wallet-balance-card-buttons">
                  <div className="add-funds">
                    <img src={addFunds} alt="addFunds" />
                    <Link to="/wallet/addfunds">
                      <a href="#">Add funds</a>
                    </Link>
                  </div>
                  <div className="withdraw">
                    <img src={withdraw} alt="withdraw" />
                    <Link to="/wallet/withdraw">
                      <a href="#">Withdraw</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bannerContainer">
                <div className="banner">
                  <img className="coin1" src={coin} alt="coin" />
                  <img className="coin2" src={coin} alt="coin" />
                  <img className="coin3" src={coin} alt="coin" />
                  <img className="coin4" src={coin} alt="coin" />
                  <img className="coin5" src={coin} alt="coin" />
                  <img className="coin6" src={coin} alt="coin" />
                  <div className="bannerContent">
                    <img src={investImg} alt="InvestImg" />
                    <div className="middleTexts">
                      <p>Save and Make Interest</p>
                      <p>Lockup & Save</p>
                      <p>With 9ja Stocks</p>
                    </div>
                    <button>Start Saving Now</button>
                  </div>
                  <div />
                </div>
                <button className="startSavingNow">Start Saving Now</button>
              </div>
              <div className="bannerContainerMobile">
                <img className="coin9" src={coin} alt="coin" />
                <img className="coin10" src={coin} alt="coin" />
                <img className="coin11" src={coin} alt="coin" />
                <img className="coin8" src={coin} alt="coin" />
                <img className="coin7" src={coin} alt="coin" />
                <div className="bannerContentMobile">
                  <img src={investImg} alt="InvestImg" />
                  <div className="middleTexts">
                    <p>Save and Make Interest</p>
                    <p>Lockup & Save</p>
                    <p>With 9ja Stocks</p>
                  </div>
                </div>
                <button className="startSavingNow">Start Saving Now</button>
                {/* <div className="banner">
                  <div />
                  <button className="startSavingNow">Start Saving Now</button>
                </div> */}
              </div>
              <WalletTable />
            </div>
          ) : !lockup ? (
            <div>
              <div className="locked-container">
                <div className="locked-card-header">
                  <p className="heading">Locked Savings</p>
                  <div onClick={handleLockup} className="lockupHistory">
                    <MdHistory
                      color="#00ba77"
                      style={{ fontSize: "20px", marginRight: "5px" }}
                    />
                    <p>Lockup History</p>
                  </div>
                </div>
                <div className="locked-card-body">
                  <div className="locked-row">
                    <p>$ 0.00</p>
                  </div>
                </div>
              </div>
              <div className="savingsCalculations">
                <div className="leftSavings">
                  <div className="topLeftSavings">
                    <p>
                      You have a total of:&nbsp;<span>$ 1,408,774.87</span>
                    </p>
                    <div className="addFundsSavings">
                      <Link to="/wallet/addfunds">
                        <img src={addGreen} alt="addFunds" />
                        <a href="#">Add funds</a>
                      </Link>
                    </div>
                  </div>
                  <div className="topLeftSavings1">
                    <p>How much do you want to save?&nbsp;&nbsp;</p>
                    <div className="amountToSave">
                      <img src={naira} alt="addFunds" />
                      <input
                        readOnly
                        value={"471,256.89"}
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div class="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={handleSliderChange}
                      class="slider"
                      id="myRange"
                    />
                    <p>{sliderValue}%</p>
                  </div>
                  <div className="topLeftSavings1">
                    <p>For how long? (in months)&nbsp;&nbsp;</p>
                    <div className="amountToSave">
                      <input
                        readOnly
                        value={"471,256.89"}
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="calculateContainer">
                    <div className="lockupSave">
                      <p>Calculate</p>
                    </div>
                  </div>
                </div>
                <div className="rightSavings">
                  <p className="head">Results:</p>
                  <div className="topRightSavings">
                    <p>
                      You will save:&nbsp;<span>$ 1,408,774.87</span>
                    </p>
                  </div>
                  <div className="topRightSavings1">
                    <p>
                      You will earn:&nbsp;<span>$ 1,408,774.87</span>
                    </p>
                  </div>
                  <div className="addPadding">
                    <div className="bottomRightSavings">
                      <p>
                        471,256.89 x 12 <span className="grey">(Months)</span> +
                        <span className="greenBold"> N8,568</span>{" "}
                        <span className="grey">(Returns)</span>
                      </p>
                    </div>
                    <div className="bottomRightSavings">
                      <p>
                        = 471,256.89 x 12{" "}
                        <span className="grey">(Balance)</span>
                      </p>
                    </div>
                  </div>
                  <div className="lockupSaveContainer">
                    <div className="lockupSave">
                      <p>Lockup and Save</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <LockupHistory />
          )}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
