import React from 'react'
import './holdingstable.css'
// import Table from 'react-bootstrap/Table';

const HoldingsTable = () => {
  const tableData = [
    {
      instruments: 'BLS,FINANCIAL SERVICES',
      filled: '37.58',
      shares: '37.58',
      avgCost: '513.05',
      ltp: '5.05',
      curVal: '5.05',
      pl: '5.1',
      change: '6%',
      avgVolume: '30M',
      volume: '100M'
    },
    {
      instruments: 'BLS FINANCIAL SERVICES',
      filled: '5',
      shares: '37.58',
      avgCost: '513.05',
      ltp: '5.05',
      curVal: '5.05',
      pl: '+54',
      change: '5%',
      avgVolume: '30M',
      volume: '20M'
    },
    {
      instruments: 'BLS FINANCIAL SERVICES',
      filled: '37.56',
      shares: '37.56',
      avgCost: '513.05',
      ltp: '5.05',
      curVal: '5.05',
      pl: '+5.1',
      change: '6%',
      avgVolume: '30M',
      volume: '180M'
    },

    {
      instruments: 'BLS,FINANCIAL SERVICES',
      filled: '37.58',
      shares: '37.56',
      avgCost: '513.05',
      ltp: '5.05',
      curVal: '613.05',
      pl: '15.05',
      change: '5.1%',
      avgVolume: '25M'
    },

    {
      instruments: 'BLS FINANCIAL SERVICES',
      filled: '37.56',
      shares: '37.56',
      avgCost: '513.05',
      ltp: '5.05',
      curVal: '5.05',
      pl: '5.1',
      change: '5.1%',
      avgVolume: '30M'
    },

    {
      instruments: 'BLS,FINANCIAL SERVICES',
      filled: '37.56',
      shares: '37.56',
      avgCost: '513.05',
      ltp: '5.06',
      curVal: '5.06',
      pl: '+5.1',
      change: '5%',
      avgVolume: '30M',
      volume: '20M'
    },

    {
      instruments: 'BLS FINANCIAL SERVICES',
      filled: '5',
      shares: '37.56',
      avgCost: '513.05',
      ltp: '5.06',
      curVal: '5.06',
      pl: '+5.1',
      change: '5%%',
      avgVolume: '30M',
      volume: '100M'
    },

    {
      instruments: 'BLS FINANCIAL SERVICES',
      filled: '37.58',
      shares: '37.56',
      avgCost: '513.05',
      ltp: '5.05',
      curVal: '5.05',
      pl: '+51',
      change: '6%',
      avgVolume: '30M',
      volume: '180M'
    },

    {
      instruments: 'BLS,FINANCIAL SERVICES',
      filled: '5',
      shares: '37.68',
      avgCost: '513.06',
      ltp: '5.05',
      curVal: '5.05',
      pl: '+61',
      change: '6%',
      avgVolume: '30M',
      volume: '20M'
    }
  ]

  return (
    <table responsive hover>
      <thead>
        <tr>
          <th>Instruments</th>
          <th>Filled</th>
          <th>Shares</th>
          <th>Avg. Cost</th>
          <th>LTP</th>
          <th>Cur. Val</th>
          <th>P&L</th>
          <th>Change</th>
          <th>Avg. Volume (3 months)</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.instruments}</td>
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
  )
}

export default HoldingsTable
