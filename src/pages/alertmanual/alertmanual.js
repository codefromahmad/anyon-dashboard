import React, { useState } from 'react'
import './alertmanual.css'
import editIcon from '../../assets/images/edit.svg'
import deleteIcon from '../../assets/images/delete.svg'
import { ChatInput, CreateEditAlert } from '../../components'
import MobileAlertManual from '../../components/MobileAlertManual/MobileAlertManual'
import { LuHistory } from 'react-icons/lu'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AlertHistory from '../../components/AlertHistory/AlertHistory'

const alerts = [
  {
    symbol: 'CAD',
    time: '5:00 PM'
  },
  {
    symbol: 'USD',
    time: '3:00 PM'
  }
]

const AlertManual = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const history = useSelector(state => state.page.history)
  const [title, setTitle] = useState('Create Alert')
  return (
    <>
      <div className='alertCard'>
        <div className='alertLeft'>
          <div className='alertLeftTop'></div>
          <div className='alertLeftBottom'>
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
                        onClick={() => setTitle('Edit Alert')}
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
        <div className='alertRight'>
          <div className='alertRightCard'>
            <div className='alertRightTextCard'>
              <CreateEditAlert title={title} />
            </div>
          </div>
        </div>
      </div>
      {history ? (
        <AlertHistory
          setTitle={setTitle}
          onClick={() => dispatch({ type: 'setHistory', payload: false })}
        />
      ) : (
        <div className='mobileManual'>
          <div className='mobileAlertTop'>
            <div
              onClick={() => dispatch({ type: 'setHistory', payload: true })}
              className='historyIcon'
            >
              <LuHistory />
            </div>
            <div className='aiPromptButtons'>
              <Link
                to='/alert'
                className={
                  pathname === '/alert'
                    ? 'active-manualitem'
                    : 'nonactive-manualitem'
                }
              >
                <p>AI</p>
              </Link>
              <Link
                to='/alertmanual'
                className={
                  pathname === '/alertmanual'
                    ? 'active-manualitem'
                    : 'nonactive-manualitem'
                }
              >
                <p>Manual</p>
              </Link>
            </div>
          </div>
          <MobileAlertManual title={title} />
        </div>
      )}
    </>
  )
}

export default AlertManual
