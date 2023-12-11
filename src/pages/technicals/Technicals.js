import React, { useState } from "react";
import "./technicals.css";
import {
  AreaChartStock,
  MainAreaChart,
  MarketsTabs,
  OrderBookAsksChart,
  OrderBookBidsChart,
  Positions,
} from "../../components";
import stock from "../../assets/images/stock.png";
import { IoCloseSharp, IoAddCircleOutline, IoExpand } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import { BiCandles } from "react-icons/bi";
import OrderBookAsks from "../../components/Charts/OrderBookCharts/OrderBookAsks";
import OrderBookBids from "../../components/Charts/OrderBookCharts/OrderBookBids";
import Select from "react-select";

const Technicals = ({ stocks }) => {
  const [value, setValue] = useState(1);
  const [popup, setPopup] = useState(null);
  const [orderType, setOrderType] = useState("market");
  const [activeButton, setActiveButton] = useState("buy");

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

  const [selectedOption, setSelectedOption] = useState("2h");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { value: "1h", label: <BiCandles color="black" /> },
    { value: "2h", label: <BiCandles color="black" /> },
    { value: "4h", label: <BiCandles color="black" /> },
  ];

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

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
        <div className="technicalsExtra">
          <p>BLS</p>
          <div className="compare">
            <p>Compare</p>
            <IoAddCircleOutline
              // className="closePopup"
              color="black"
              onClick={() => setPopup(null)}
            />
          </div>
          {/* <div className="candleContainer"> */}
          <div className="customDropdown" onClick={handleToggleDropdown}>
            {selectedOption.label}
            {isDropdownOpen && (
              <div className="dropdownOptions">
                {options.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleSelectOption(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
            {/* </div> */}
            {/* <Select
              className="candleSelect"
              value={selectedOption}
              onChange={handleChange}
              defaultValue={selectedOption[1]}
              options={options}
              isSearchable={false}
            /> */}
          </div>
          <div className="timeContainer">
            <select id="Price" className="time">
              <option value="1h">1h</option>
              <option value="2h">2h</option>
              <option value="4h">4h</option>
              <option value="1D">1D</option>
              <option value="1W">1W</option>
              <option value="1M">1M</option>
              <option value="1Y">1Y</option>
            </select>
          </div>
          <div className="priceContainer">
            <select id="Price">
              <option value="Price">Indicators</option>
            </select>
          </div>
          <div className="expandContainer">
            <HiPencil className="expand" />
          </div>
          <div className="expandContainer">
            <IoExpand className="expand" />
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
    </div>
  );
};

export default Technicals;
