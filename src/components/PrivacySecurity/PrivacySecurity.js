import React, { useState } from 'react'
import './privacysecurity.css'
import { Link } from 'react-router-dom'
import ChangePassword from '../ChangePassword/ChangePassword'
import { useDispatch, useSelector } from 'react-redux'

const PrivacySecurity = (
  {
    // changePassword,
    // setChangePassword,
    // handleChangePasswordComp,
  }
) => {
  const [textMessage, setTextMessage] = useState(true)
  const [authentication, setAuthentication] = useState(true)
  const changePassword = useSelector(state => state.page.changePassword)
  const dispatch = useDispatch()

  const handleTextMessage = () => {
    setTextMessage(!textMessage)
  }

  const handleAuthentication = () => {
    setAuthentication(!authentication)
  }

  const handleChangePasswordComp = () => {
    dispatch({ type: 'setChangePassword', payload: true })
  }

  return (
    <>
      {changePassword ? (
        <ChangePassword />
      ) : (
        <div className='privacySecurityCard'>
          <div className='twoFactorAuthentication'>
            <h3>Two-Factor Authentication</h3>
            <p>
              Select your preferred option for receiving one time passwords
              (OTPs)
            </p>
          </div>
          <div className='privacySecurityMidDiv'>
            <div className='textMessageDiv'>
              <h3>Text message (SMS)</h3>
              <p>
                Use text messages to receive verification codes for added
                protection.
              </p>
            </div>
            {textMessage ? (
              <div onClick={handleTextMessage} className='greenDiv'>
                <div className='whiteDiv'></div>
              </div>
            ) : (
              <div onClick={handleTextMessage} className='greyDiv'>
                <div className='greyWhiteDiv'></div>
              </div>
            )}
          </div>
          <div className='privacySecurityMidDiv'>
            <div className='textMessageDiv'>
              <h3>Authentication app (Recommended)</h3>
              <p>
                Use Google authenticator to generate verification codes for
                secure login
              </p>
            </div>
            {authentication ? (
              <div onClick={handleAuthentication} className='greyDiv'>
                <div className='greyWhiteDiv'></div>
              </div>
            ) : (
              <div onClick={handleAuthentication} className='greenDiv'>
                <div className='whiteDiv'></div>
              </div>
            )}
          </div>
          <div className='changePasswordDiv'>
            <h3>Change password</h3>
            <Link
              onClick={handleChangePasswordComp}
              to='/privacysecurity/changepassword'
            >
              Change your password here
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default PrivacySecurity
