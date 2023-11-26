import React from 'react'
import './positions.css'
import { positions } from '../../constants'

const Positions = () => {
  return (
    <div className='alertLeftBottom'>
      <h4>Positions</h4>
      <table className='custom-table'>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Open P&L</th>
            <th>Open P&L%</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position, index) => (
            <tr key={index}>
              <td>{position.symbol}</td>
              <td
                className={`${
                  position.pnl.includes('+') ? 'green-div' : 'red'
                }`}
              >
                {position.pnl}
              </td>
              <td
                className={`${
                  position.pnlp.includes('+') ? 'green-div' : 'red'
                }`}
              >
                {position.pnlp}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Positions
