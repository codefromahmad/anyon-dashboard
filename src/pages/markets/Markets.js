import React from "react";
import "./markets.css";
import { AreaChartStock } from "../../components";

const pData = [
  { time: "2023-01-01", value: 90 },
  { time: "2023-02-01", value: 120 },
  { time: "2023-03-01", value: 250 },
  { time: "2023-04-01", value: 130 },
  { time: "2023-05-01", value: 160 },
  { time: "2023-06-01", value: 170 },
  { time: "2023-07-01", value: 190 },
  { time: "2023-08-01", value: 250 },
  { time: "2023-09-01", value: 330 },
  { time: "2023-10-12", value: 460 },
  { time: "2023-11-12", value: 500 },
  { time: "2023-12-12", value: 620 },
  { time: "2024-01-12", value: 730 },
  { time: "2024-02-12", value: 560 },
  { time: "2024-03-12", value: 770 },
  { time: "2024-04-12", value: 800 },
  { time: "2024-05-12", value: 850 },
  { time: "2024-06-12", value: 930 },
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

const stocks = [
  {
    name: "BLS",
    price: "N10.50 (+5.0%)",
    data: pData,
  },
  {
    name: "CADBRY",
    price: "N10.50 (+5.0%)",
    data: pData,
  },
  {
    name: "CADBRY",
    price: "N10.50 (+5.0%)",
    data: nData,
  },
  {
    name: "BLS",
    price: "N10.50 (+5.0%)",
    data: pData,
  },
  {
    name: "BLS",
    price: "N10.50 (+5.0%)",
    data: nData,
  },
  {
    name: "CADBRY",
    price: "N10.50 (+5.0%)",
    data: nData,
  },
  {
    name: "CADBRY",
    price: "N10.50 (+5.0%)",
    data: pData,
  },
  {
    name: "BLS",
    price: "N10.50 (+5.0%)",
    data: pData,
  },
  {
    name: "BLS",
    price: "N10.50 (+5.0%)",
    data: nData,
  },
  {
    name: "BLS",
    price: "N10.50 (+5.0%)",
    data: nData,
  },
  {
    name: "BLS",
    price: "N10.50 (+5.0%)",
    data: pData,
  },
  {
    name: "CADBRY",
    price: "N10.50 (+5.0%)",
    data: pData,
  },
  {
    name: "CADBRY",
    price: "N10.50 (+5.0%)",
    data: nData,
  },
  {
    name: "BLS",
    price: "N10.50 (+5.0%)",
    data: nData,
  },
];

const Markets = () => {
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
              <AreaChartStock data={stock.data} />
            </div>
          </div>
        ))}
      </div>
      <div className="middleMarket"></div>
      <div className="rightMarket"></div>
    </div>
  );
};

export default Markets;
