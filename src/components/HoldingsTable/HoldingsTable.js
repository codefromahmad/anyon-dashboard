import React from "react";
import "./holdingstable.css";
import { FiSearch } from "react-icons/fi";
// import Table from 'react-bootstrap/Table';

const HoldingsTable = () => {
  const tableData = [
    {
      instruments: "BLS,FINANCIAL SERVICES",
      filled: "37.58",
      shares: "37.58",
      avgCost: "513.05",
      ltp: "5.05",
      curVal: "5.05",
      pl: "5.1",
      change: "+5.1",
      perChange: "6%",
      avgVolume: "30M",
      volume: "100M",
    },
    {
      instruments: "BLS FINANCIAL SERVICES",
      filled: "5",
      shares: "37.58",
      avgCost: "513.05",
      ltp: "5.05",
      curVal: "5.05",
      pl: "+54",
      change: "+5.1",
      perChange: "5%",
      avgVolume: "30M",
      volume: "20M",
    },
    {
      instruments: "BLS FINANCIAL SERVICES",
      filled: "37.56",
      shares: "37.56",
      avgCost: "513.05",
      ltp: "5.05",
      curVal: "5.05",
      pl: "+5.1",
      change: "+5.1",
      perChange: "6%",
      avgVolume: "30M",
      volume: "180M",
    },

    {
      instruments: "BLS,FINANCIAL SERVICES",
      filled: "37.58",
      shares: "37.56",
      avgCost: "513.05",
      ltp: "5.05",
      curVal: "613.05",
      pl: "15.05",
      change: "+5.1",
      perChange: "5.1%",
      avgVolume: "25M",
      volume: "100M",
    },

    {
      instruments: "BLS FINANCIAL SERVICES",
      filled: "37.56",
      shares: "37.56",
      avgCost: "513.05",
      ltp: "5.05",
      curVal: "5.05",
      pl: "5.1",
      change: "+5.1",
      perChange: "5.1%",
      avgVolume: "30M",
      volume: "100M",
    },

    {
      instruments: "BLS,FINANCIAL SERVICES",
      filled: "37.56",
      shares: "37.56",
      avgCost: "513.05",
      ltp: "5.06",
      curVal: "5.06",
      pl: "+5.1",
      change: "+5.1",
      perChange: "5%",
      avgVolume: "30M",
      volume: "20M",
    },

    {
      instruments: "BLS FINANCIAL SERVICES",
      filled: "5",
      shares: "37.56",
      avgCost: "513.05",
      ltp: "5.06",
      curVal: "5.06",
      pl: "+5.1",
      change: "+5.1",
      perChange: "5%%",
      avgVolume: "30M",
      volume: "100M",
    },

    {
      instruments: "BLS FINANCIAL SERVICES",
      filled: "37.58",
      shares: "37.56",
      avgCost: "513.05",
      ltp: "5.05",
      curVal: "5.05",
      pl: "+51",
      change: "+5.1",
      perChange: "6%",
      avgVolume: "30M",
      volume: "180M",
    },

    {
      instruments: "BLS,FINANCIAL SERVICES",
      filled: "5",
      shares: "37.68",
      avgCost: "513.06",
      ltp: "5.05",
      curVal: "5.05",
      pl: "+61",
      change: "+5.1",
      perChange: "6%",
      avgVolume: "30M",
      volume: "20M",
    },
  ];

  return (
    <div className="holdingsTableContainer">
      <table className="holdingTable" responsive hover>
        <thead>
          <tr>
            <th className="border instrument">Instrument</th>
            <th>
              <div className="selectOption">
                <select id="Daily">
                  <option value="Daily">Filled</option>
                  <option value="Weekly">Incomplete</option>
                </select>
              </div>
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th colSpan="2">
              <div className="search-bar-holdings">
                <FiSearch color="#C3C3C3" />
                <input placeholder="Search" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border"></td>
            <td>Shares</td>
            <td>Avg. Cost</td>
            <td>LTP</td>
            <td>Cur. Val</td>
            <td>P&L</td>
            <td>Change</td>
            <td>% Change</td>
            <td>Avg. Volume (3 months)</td>
            <td>Volume</td>
          </tr>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="border">{row.instruments}</td>
              <td>{row.filled}</td>
              <td>{row.shares}</td>
              <td>{row.avgCost}</td>
              <td>{row.ltp}</td>
              <td>{row.curVal}</td>
              <td>{row.pl}</td>
              <td>{row.change}</td>
              <td>{row.avgVolume}</td>
              <td>{row.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;
