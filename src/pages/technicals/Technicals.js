import React, { useState } from "react";
import "./technicals.css";
import {
  AreaChartStock,
  BuySellLot,
  BuySellPopUpOverlay,
  CandlestickChart,
  MainAreaChart,
  MarketsTabs,
  OrderBookAsksChart,
  OrderBookBidsChart,
  Positions,
  TechnicalExtras,
} from "../../components";
import stock from "../../assets/images/stock.png";
import { IoCloseSharp, IoAddCircleOutline, IoExpand } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import { BiCandles } from "react-icons/bi";
import OrderBookAsks from "../../components/Charts/OrderBookCharts/OrderBookAsks";
import OrderBookBids from "../../components/Charts/OrderBookCharts/OrderBookBids";
import Select from "react-select";
import { HiChevronDown } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { data } from "../../constants";

const Technicals = ({ stocks }) => {
  const [value, setValue] = useState(1);
  const [popup, setPopup] = useState(null);
  const [orderType, setOrderType] = useState("market");
  const [activeButton, setActiveButton] = useState("buy");
  const expanded = useSelector((state) => state.page.expanded);
  const stockSelected = useSelector((state) => state.page.stockSelected);
  const confirm = useSelector((state) => state.page.confirm);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

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

  const selectStock = (item) => {
    dispatch({ type: "setStockSelected", payload: item });
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

  const handlePopUp = () => {
    console.log("handlePopUp");
    setPopup(null);
  };

  return (
    <>
      <div className="technicalsLaptop">
        {expanded ? (
          <div className="expandedTechnicalContainer">
            <div className="technicalExtras">
              <TechnicalExtras />
            </div>
            <div>
              <BuySellLot
                showPopup={showPopup}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                value={value}
              />
            </div>
            <BuySellPopUpOverlay
              popup={popup}
              handlePopUp={handlePopUp}
              setPopup={setPopup}
              value={value}
            />
            <div className="candleStickContainerExpanded">
              <CandlestickChart />
            </div>
          </div>
        ) : (
          <div className="marketContainer">
            <div className="leftTechnicals">
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
            <div
              className={`middleTechnicals ${confirm ? "width45" : "width75"}`}
            >
              <div className="technicalExtrasContainer">
                <TechnicalExtras />
              </div>
              <BuySellLot
                showPopup={showPopup}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                value={value}
              />
              <div className="candleStickContainer">
                <CandlestickChart />
              </div>
            </div>
            <BuySellPopUpOverlay
              popup={popup}
              handlePopUp={handlePopUp}
              setPopup={setPopup}
              value={value}
            />
            {confirm ? (
              <div className="rightTechnicals">
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
                          activeButton === "buy"
                            ? "buyButton"
                            : "nonActiveButton"
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
                          activeButton === "sell"
                            ? "sellButton"
                            : "nonActiveButton"
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
            ) : null}
          </div>
        )}
      </div>
      <div className="marketsMobile">
        {!stockSelected && (
          <div className="leftMarket">
            {stocks.map((stock, index) => (
              <div
                onClick={() => selectStock(stock)}
                key={index}
                className="stockItem"
              >
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
        )}
        {stockSelected && (
          <>
            <div className="mobileStockMarkets">
              <div className="mobileAlertTop">
                <div className="aiPromptButtons">
                  <Link
                    to="/technicals"
                    className={
                      pathname === "/technicals"
                        ? "active-item"
                        : "nonactive-item"
                    }
                  >
                    <p>Technicals</p>
                  </Link>
                  <Link
                    to="/markets"
                    className={
                      pathname === "/markets" ? "active-item" : "nonactive-item"
                    }
                  >
                    <p>Simple</p>
                  </Link>
                  <Link
                    to="/marketsai"
                    className={
                      pathname === "/marketsai"
                        ? "active-item"
                        : "nonactive-item"
                    }
                  >
                    <p>AI</p>
                  </Link>
                </div>
              </div>
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
                      <div className="nTextMarkets">
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
              <BuySellLot
                showPopup={showPopup}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                value={value}
              />
              <MarketsTabs links={data} expand={false} />
              <div className="mainAreaContainerMobile">
                <CandlestickChart />
              </div>
            </div>
            {confirm ? (
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
                          activeButton === "buy"
                            ? "buyButton"
                            : "nonActiveButton"
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
                          activeButton === "sell"
                            ? "sellButton"
                            : "nonActiveButton"
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
            ) : null}
          </>
        )}
        {popup && (
          <BuySellPopUpOverlay
            popup={popup}
            handlePopUp={handlePopUp}
            setPopup={setPopup}
            value={value}
          />
        )}
      </div>
    </>
  );
};

export default Technicals;
