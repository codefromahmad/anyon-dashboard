import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import editIcon from '../../assets/images/edit.svg'
import deleteIcon from '../../assets/images/delete.svg'
import './alerthistory.css'
import { Positions } from '../../components'
import { useDispatch } from 'react-redux'

const alerts = [
  {
    symbol: 'CAD',
    time: '5:00 PM'
  },
  {
    symbol: 'USD',
    time: '3:00 PM'
  },
  {
    symbol: 'CHF',
    time: '2:20 PM'
  },
  {
    symbol: 'NGN',
    time: '6:00 PM'
  }
]

const AlertHistory = ({ setTitle }) => {
  const [isLeftTopScrolling, setIsLeftTopScrolling] = useState(false)
  const [isLeftBottomScrolling, setIsLeftBottomScrolling] = useState(false)
  const alertLeftTopRef = useRef(null)
  const alertLeftBottomRef = useRef(null)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsLeftTopScrolling(true)
  //   }

  //   const hideScrollbar = () => {
  //     setIsLeftTopScrolling(false)
  //   }

  //   const alertLeftTopElement = alertLeftTopRef.current

  //   alertLeftTopElement.addEventListener('scroll', handleScroll)
  //   alertLeftTopElement.addEventListener('mouseleave', hideScrollbar)

  //   return () => {
  //     alertLeftTopElement.removeEventListener('scroll', handleScroll)
  //     alertLeftTopElement.removeEventListener('mouseleave', hideScrollbar)
  //   }
  // }, [])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsLeftBottomScrolling(true)
  //   }

  //   const hideScrollbar = () => {
  //     setIsLeftBottomScrolling(false)
  //   }

  //   const alertLeftBottomElement = alertLeftBottomRef.current

  //   alertLeftBottomElement.addEventListener('scroll', handleScroll)
  //   alertLeftBottomElement.addEventListener('mouseleave', hideScrollbar)

  //   return () => {
  //     alertLeftBottomElement.removeEventListener('scroll', handleScroll)
  //     alertLeftBottomElement.removeEventListener('mouseleave', hideScrollbar)
  //   }
  // }, [])

  const { pathname } = useLocation()
  return (
    <>
      {pathname === '/alert' ? (
        <div className='alertMobileLeft'>
          <div
            className={`alertLeftTop ${
              isLeftTopScrolling ? 'scrolling' : 'notscrolling'
            }`}
            ref={alertLeftTopRef}
          >
            <div className='historyMobileCard'>
              <div className='newChatButton'>
                <p>New Chat</p>
              </div>
            </div>
            <div className='time-remaining'>
              <p className='date'>Last 7 days</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='date'>Last 30 days</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='date'>Last 30 days</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
              <p className='item'>Place a buy trade on Cadbury at 12.7</p>
            </div>
          </div>
          <Positions />
        </div>
      ) : (
        <div className='manualHistory'>
          <div
            className={`alertLeftBottom ${
              isLeftBottomScrolling ? 'scrolling' : 'notscrolling'
            }`}
            ref={alertLeftBottomRef}
          >
            <h4>Alert</h4>
            <table className='custom-table'>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((alert, index) => (
                  <tr key={index}>
                    <td>{alert.symbol}</td>
                    <td>{alert.time}</td>
                    <td>
                      <img
                        onClick={() => {
                          dispatch({ type: 'setHistory', payload: false })
                          setTitle('Edit Alert')
                        }}
                        src={editIcon}
                        alt='Alert'
                      />
                      <img src={deleteIcon} alt='Alert' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )
}

export default AlertHistory
