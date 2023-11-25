import React from 'react'
import './holdings.css'
import { HoldingsTable } from '../../components'
const Holdings = () => {
  return (
    <div className='holdingCard'>
      <div className='holdingCardTop'>
        <div className='holdingCardLeft'>
          <div className='portfolioValue'>
            <p>Portfolio value</p>
            <div className='no-text'>
              <div className='n-text'>
                <p>N</p>
              </div>
              <div className='o-text'>
                <p>O</p>
              </div>
            </div>
          </div>
          <div className='totalInvested'>
            <p>Total Invested</p>
            <div className='no-text'>
              <div className='n-text'>
                <p>N</p>
              </div>
              <div className='o-text'>
                <p>O</p>
              </div>
            </div>
          </div>
          <div className='profitLoss'>
            <p>Profit & Loss</p>
            <div className='no-text'>
              <div className='n-text'>
                <p>N</p>
              </div>
              <div className='o-text'>
                <p>O</p>
              </div>
            </div>
          </div>
        </div>
        <div className='holdingCardRight'>
          <p>Graph</p>
        </div>
      </div>
      <div className='holdingTable'>
        <HoldingsTable />
      </div>
    </div>
  )
}

export default Holdings
