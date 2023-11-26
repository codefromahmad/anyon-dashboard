import React, { useEffect, useState } from 'react'
import './profile.css'
import { IoIosArrowForward } from 'react-icons/io'
import { TabsComponent } from '../../components'
import ChangePassword from '../../components/ChangePassword/ChangePassword'
import ProofOfID from '../../components/ProofOfID/ProofOfID'
import ProofOfAddress from '../../components/ProofOfAddres/ProofOfAddress'
import UploadPhotograph from '../../components/UploadPhotograph/UploadPhotograph'
import AddBankDetail from '../../components/AddBankDetail/AddBankDetail'

import {
  MyAccount,
  AccountInformation,
  PrivacySecurity,
  HelpSupport,
  Payment
} from '../../components'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  console.log('pathname', pathname)

  const [openTab, setOpenTab] = useState(pathname)
  const [accountInformation, setAccountInformation] = useState('')
  const profile = useSelector(state => state.page.profile)
  const [changePassword, setChangePassword] = useState(false)
  const [addBank, setAddBank] = useState(false)
  // const [activePage, setActivePage] = useState("");

  // const handleAccountInformation = text => {
  //   setAccountInformation(text)
  // }

  // const handleChangePasswordComp = () => {
  //   setChangePassword(true)
  // }

  const handleAddBankComp = () => {
    setAddBank(true)
  }

  const data = [
    {
      id: 1,
      name: 'Profile',
      path: '/profile',
      content: <MyAccount />
    },
    {
      id: 2,
      name: 'Account Information',
      path: '/accountinformation',
      content: (
        <AccountInformation
          accountInformation={accountInformation}
          setAccountInformation={setAccountInformation}
          // handleAccountInformation={handleAccountInformation}
        />
      )
    },
    {
      id: 3,
      name: 'Privacy & Security',
      path: '/privacysecurity',
      content: (
        <PrivacySecurity
          changePassword={changePassword}
          setChangePassword={setChangePassword}
          // handleChangePasswordComp={handleChangePasswordComp}
        />
      )
    },
    {
      id: 4,
      name: 'Help & Support',
      path: '/helpsupport',
      content: <HelpSupport />
    },
    {
      id: 5,
      name: 'Payment',
      path: '/payment',
      content: (
        <Payment
          addBank={addBank}
          setAddBank={setAddBank}
          handleAddBankComp={handleAddBankComp}
        />
      )
    }
  ]

  const handleProfileActiveOnMobile = () => {
    dispatch({ type: 'setProfile', payload: true })
  }

  return (
    <div className='rounded-card'>
      <div className='laptop-query'>
        <TabsComponent
          data={data}
          openTab={openTab}
          setOpenTab={setOpenTab}
          // setAddBank={setAddBank}
          // setChangePassword={setChangePassword}
          // setAccountInformation={setAccountInformation}
        />
      </div>

      <div className='for-mobile'>
        {profile && <MyAccount />}
        {pathname.startsWith('/accountinformation') && (
          <AccountInformation
          // accountInformation={accountInformation}
          // setAccountInformation={setAccountInformation}
          // handleAccountInformation={handleAccountInformation}
          />
        )}

        {pathname.startsWith('/privacysecurity') && (
          <PrivacySecurity
          // changePassword={changePassword}
          // setChangePassword={setChangePassword}
          // handleChangePasswordComp={handleChangePasswordComp}
          />
        )}
        {pathname === '/helpsupport' && <HelpSupport />}
        {pathname.startsWith('/payment') && (
          <Payment
          // addBank={addBank}
          // setAddBank={setAddBank}
          // handleAddBankComp={handleAddBankComp}
          />
        )}
      </div>

      {!profile && pathname === '/profile' && (
        <div className='accountSettingDiv'>
          <div className='accountSettingHeading'>
            <h3>Account Setting</h3>
          </div>
          <div className='accountSettingCards'>
            <Link
              onClick={handleProfileActiveOnMobile}
              to={'/profile'}
              className='accountSettingCard'
            >
              <p>Profile</p>
              <IoIosArrowForward />
            </Link>
            <Link
              onClick={() =>
                dispatch({
                  type: 'setAccountInformation',
                  payload: 'accountInformation'
                })
              }
              to={'/accountinformation'}
              className='accountSettingCard'
            >
              <p>Account Information</p>
              <IoIosArrowForward />
            </Link>
            <Link to={'/privacysecurity'} className='accountSettingCard'>
              <p>Privacy & Security</p>
              <IoIosArrowForward />
            </Link>
            <Link to={'/helpsupport'} className='accountSettingCard'>
              <p>Help & Support</p>
              <IoIosArrowForward />
            </Link>
            <Link to={'/payment'} className='accountSettingCard'>
              <p>Payment</p>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
