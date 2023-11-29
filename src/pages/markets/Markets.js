import React, { useState } from "react";
import "./markets.css";
import {
  AreaChartStock,
  MainAreaChart,
  MarketsTabs,
  OrderBookAsksChart,
  OrderBookBidsChart,
  Positions,
} from "../../components";
import stock from "../../assets/images/stock.png";
import { IoCloseSharp } from "react-icons/io5";
import OrderBookAsks from "../../components/Charts/OrderBookCharts/OrderBookAsks";
import OrderBookBids from "../../components/Charts/OrderBookCharts/OrderBookBids";

const Markets = ({ stocks }) => {
  const [value, setValue] = useState(1);
  const [popup, setPopup] = useState(null);
  const [activeButton, setActiveButton] = useState("buy");

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

  const data = [
    {
      id: 1,
      name: "1D",
      content: "",
    },
    {
      id: 2,
      name: "7D",
      content: "",
    },
    {
      id: 3,
      name: "1M",
      content: "",
    },
    {
      id: 4,
      name: "3M",
      content: "",
    },
    {
      id: 5,
      name: "6M",
      content: "",
    },
    {
      id: 6,
      name: "1Y",
      content: "",
    },
  ];

  const pData = [
    { time: "2023-01-01", value: 90 },
    { time: "2023-01-02", value: 120 },
    { time: "2023-01-03", value: 250 },
    { time: "2023-01-04", value: 130 },
    { time: "2023-01-05", value: 160 },
    { time: "2023-01-06", value: 170 },
    { time: "2023-01-07", value: 190 },
    { time: "2023-01-08", value: 250 },
    { time: "2023-01-09", value: 330 },
    { time: "2023-01-10", value: 460 },
    { time: "2023-01-11", value: 500 },
    { time: "2023-01-12", value: 620 },
    { time: "2023-01-13", value: 730 },
    { time: "2023-01-14", value: 560 },
    { time: "2023-01-15", value: 770 },
    { time: "2023-01-16", value: 800 },
    { time: "2023-01-17", value: 850 },
    { time: "2023-01-18", value: 930 },
    { time: "2023-01-19", value: 850 },
    { time: "2023-01-20", value: 700 },
    { time: "2023-01-21", value: 600 },
    { time: "2023-01-22", value: 550 },
    { time: "2023-01-23", value: 490 },
    { time: "2023-01-24", value: 430 },
    { time: "2023-01-25", value: 370 },
    { time: "2023-01-26", value: 300 },
    { time: "2023-01-27", value: 700 },
  ];

  const nData = [
    { time: "2023-01-01", value: 930 },
    { time: "2023-02-01", value: 850 },
    { time: "2023-03-01", value: 800 },
    { time: "2023-04-01", value: 770 },
    { time: "2023-05-01", value: 560 },
    { time: "2023-06-01", value: 730 },
    { time: "2023-07-01", value: 620 },
    { time: "2023-08-01", value: 500 },
    { time: "2023-09-01", value: 460 },
    { time: "2023-10-12", value: 300 },
    { time: "2023-11-12", value: 250 },
    { time: "2023-12-12", value: 190 },
    { time: "2024-01-12", value: 170 },
    { time: "2024-02-12", value: 160 },
    { time: "2024-03-12", value: 130 },
    { time: "2024-04-12", value: 250 },
    { time: "2024-05-12", value: 120 },
    { time: "2024-06-12", value: 90 },
  ];

  const orderBookData = {
    bids: [
      { price: 100, quantity: 5 },
      { price: 99.5, quantity: 10 },
      { price: 99, quantity: 8 },
      // ... more bids
    ],
    asks: [
      { price: 101, quantity: 7 },
      { price: 102, quantity: 15 },
      { price: 103, quantity: 20 },
      // ... more asks
    ],
  };

  const bidAskData = [
    {
      bidSize: 40,
      bidPrice: 99.5,
      askSize: 40,
      askPrice: 102,
    },
    {
      bidSize: 40,
      bidPrice: 99.5,
      askSize: 40,
      askPrice: 102,
    },
    {
      bidSize: 40,
      bidPrice: 99.5,
      askSize: 40,
      askPrice: 102,
    },
    {
      bidSize: 40,
      bidPrice: 99.5,
      askSize: 40,
      askPrice: 102,
    },
    {
      bidSize: 40,
      bidPrice: 99.5,
      askSize: 40,
      askPrice: 102,
    },
    {
      bidSize: 40,
      bidPrice: 99.5,
      askSize: 40,
      askPrice: 102,
    },
    {
      bidSize: 40,
      bidPrice: 99.5,
      askSize: 40,
      askPrice: 102,
    },
    {
      bidSize: 40,
      bidPrice: 99.5,
      askSize: 40,
      askPrice: 102,
    },
  ];

  return (
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
          <div onClick={() => showPopup("sell")} className="sellSmallButton">
            <p>Sell</p>
          </div>
        </div>
        <MarketsTabs links={data} />
        <MainAreaChart data={pData} trend={"up"} />
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
              className={`head ${popup === "buy" ? "greenColor" : "redColor"}`}
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
        <div className="orderBook">
          <div className="orderBookHeader">
            <p className="heading">Order Book</p>
          </div>
          <div className="orderBookChart">
            {/* <div className='asks'> */}
            <OrderBookAsks />
            {/* </div> */}
            {/* <div className='bids'> */}
            <OrderBookBids />
            {/* </div> */}
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
                  <select id="Schedule">
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
                <p>Order Type</p>
                <div className="orderTypeSelect">
                  <input type="number" />
                </div>
              </div>
            </div>
          </div>
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
  );
};

export default Markets;
