import React, { useState } from "react";
import "./markets.css";
import {
  AreaChartStock,
  MainAreaChart,
  MarketsTabs,
  OrderBookAsksChart,
  OrderBookBidsChart,
  Positions,
  TechnicalExtras,
} from "../../components";
import stock from "../../assets/images/stock.png";
import { IoCloseSharp } from "react-icons/io5";
import OrderBookAsks from "../../components/Charts/OrderBookCharts/OrderBookAsks";
import OrderBookBids from "../../components/Charts/OrderBookCharts/OrderBookBids";
import { data, pData, nData, bidAskData } from "../../constants";
import { useDispatch, useSelector } from "react-redux";

const Markets = ({ stocks }) => {
  const [value, setValue] = useState(1);
  const [popup, setPopup] = useState(null);
  const [orderType, setOrderType] = useState("market");
  const [activeButton, setActiveButton] = useState("buy");
  const expanded = useSelector((state) => state.page.expanded);

  const hanldeOrderType = (event) => {
    setOrderType(event.target.value);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value === 0) return;
    setValue(value - 1);
  };

  const showPopup = (data) => {
    setPopup(data);
  };

  return (
    <>
      {expanded ? (
        <div className="expandedMarketContainer">
          <TechnicalExtras />
        </div>
      ) : (
        <div className="marketContainer">
          <div className="leftMarket">
            {stocks.map((stock, index) => (
              <div className="stockItem">
                <div className="stockName">
                  <p className="name">{stock.name}</p>
                  <p className="pprice">{stock.price}</p>
                </div>
                <div>
                  <AreaChartStock data={stock.data} trend={stock.trend} />
                </div>
              </div>
            ))}
          </div>
          <div className="middleMarket">
            <div className="stockInfo">
              <div className="stockDetail">
                <img src={stock} alt="stock" />
                <div className="nameAndDesc">
                  <p className="name">BLS</p>
                  <p className="description">Bilingual system</p>
                </div>
              </div>
              <div>
                <div className="marketsNoTextEquity">
                  <div className="no-text">
                    <div className="n-text">
                      <p>N</p>
                    </div>
                    <div className="om-text">
                      <p className="price">10.50</p>
                    </div>
                    <p className="percent">+2.5 (+5.0%)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-header">
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
              <div
                onClick={() => showPopup("sell")}
                className="sellSmallButton"
              >
                <p>Sell</p>
              </div>
            </div>
            <MarketsTabs links={data} />
            {/* <MainAreaChart data={pData} trend={"up"} /> */}
            <div className="mainAreaContainer">
              <MainAreaChart data={pData} trend={"up"} />
            </div>
          </div>
          {popup && <div className="overlayMarkets"></div>}
          {popup && (
            <>
              <div className="popup">
                <IoCloseSharp
                  onClick={() => setPopup(null)}
                  className="closePopup"
                />
                <p
                  className={`head ${
                    popup === "buy" ? "greenColor" : "redColor"
                  }`}
                >
                  {popup === "buy" ? "Confirm Buy" : "Confirm Sell"}
                </p>
                <p className="lot">( {value} Lot )</p>
                <button
                  onClick={() => setPopup(null)}
                  className={` ${popup === "buy" ? "greenBack" : "redBack"}`}
                >
                  <p>Confirm</p>
                </button>
              </div>
            </>
          )}
          <div className="rightMarket">
            <div className="orderBookContainer">
              <div className="orderBookHeader">
                <p className="heading">Order Book</p>
              </div>
              <div className="orderBookChart">
                <OrderBookAsks />
                <OrderBookBids />
              </div>
            </div>
            <div className="bidAskContainer">
              <div className="bidAskHeadings">
                <p className="bidSize">Size</p>
                <p className="bidText">Bid</p>
                <p className="askText">Ask</p>
                <p className="askSize">Size</p>
              </div>
              {bidAskData.map((item, index) => (
                <div className="bidAskItem">
                  <p className="bidSize">{item.bidSize}</p>
                  <div className="bidBG">
                    <p className="bidText">{item.bidPrice}</p>
                  </div>
                  <div className="askBG">
                    <p className="askText">{item.askPrice}</p>
                  </div>
                  <p className="askSize">{item.askSize}</p>
                </div>
              ))}
            </div>
            <div className="orderBook">
              <div className="orderBookHeader">
                <p className="heading">Trade</p>
              </div>
              <div className="tradeContainer">
                <div>
                  <div
                    onClick={() => setActiveButton("buy")}
                    className={`${
                      activeButton === "buy" ? "buyButton" : "nonActiveButton"
                    }`}
                  >
                    <p>Buy</p>
                  </div>
                  <div className="orderType">
                    <p>Order Type</p>
                    <div className="orderTypeSelect">
                      <select
                        id="Schedule"
                        value={orderType}
                        onChange={hanldeOrderType}
                      >
                        <option value="market">Market</option>
                        <option value="limit">Limit</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    onClick={() => setActiveButton("sell")}
                    className={`${
                      activeButton === "sell" ? "sellButton" : "nonActiveButton"
                    }`}
                  >
                    <p>Sell</p>
                  </div>
                  <div className="orderType">
                    <p>Quantity</p>
                    <div className="orderTypeSelect">
                      <input type="number" />
                    </div>
                  </div>
                </div>
              </div>
              {orderType === "limit" && (
                <div className="timeInForce">
                  <p>Limit Price</p>
                  <div className="orderTypeSelect">
                    <select id="Schedule">
                      <option value="day">90</option>
                      <option value="week">80</option>
                    </select>
                  </div>
                </div>
              )}
              <div className="timeInForce">
                <p>Time-in-Force</p>
                <div className="orderTypeSelect">
                  <select id="Schedule">
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                  </select>
                </div>
              </div>
              <div className="mainButton">
                <div
                  className={`${
                    activeButton === "sell" ? "sellButton" : "buyButton"
                  }`}
                >
                  <p>Buy</p>
                </div>
              </div>
            </div>
            <Positions />
          </div>
          {/* <OrderBookAsksChart orderBookData={orderBookData} /> */}
          {/* <OrderBookBidsChart orderBookData={orderBookData} /> */}
        </div>
      )}
    </>
  );
};

export default Markets;
