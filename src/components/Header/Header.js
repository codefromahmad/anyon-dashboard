import React, { useEffect, useState } from 'react'
import './header.css'
import { FaChevronDown } from 'react-icons/fa'
import profilePicture from '../../assets/images/profile-picture.jpeg'
// import bellIcon from "../../assets/images/bellicon.svg";
import { IoIosMenu } from 'react-icons/io'
import { GoBell } from 'react-icons/go'
import {
  Link,
  unstable_HistoryRouter,
  useLocation,
  useNavigate
} from 'react-router-dom'
import profileIcon from '../../assets/images/menu/profile-icon.svg'
import supportIcon from '../../assets/images/menu/support-icon.svg'
import logoutIcon from '../../assets/images/menu/logout-icon.svg'
import { FiSearch } from 'react-icons/fi'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { set } from 'date-fns'

const Header = ({ toggleMenu, dropdownMenu, setDropdownMenu }) => {
  const [headerTitle, setHeaderTitle] = useState('')
  const [backButton, setBackButton] = useState(false)
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const history = useSelector(state => state.page.history)
  const profile = useSelector(state => state.page.profile)
  const changePassword = useSelector(state => state.page.changePassword)
  const accountInformation = useSelector(state => state.page.accountInformation)
  const addBank = useSelector(state => state.page.addBank)
  console.log('dropdownMenu', dropdownMenu)
  const screenWidth = window.innerWidth

  useEffect(() => {
    setBackButton(false)
    const handleResize = () => {
      if (screenWidth > 425) {
        console.log('Its desktop screen', pathname)
        if (pathname === '/profile') {
          setHeaderTitle('My Account')
        } else if (pathname === '/accountinformation') {
          setHeaderTitle('Account Information')
        } else if (pathname === '/accountinformation/proofofid') {
          setBackButton(true)
          setHeaderTitle('Proof of ID')
        } else if (pathname === '/accountinformation/proofofaddress') {
          setHeaderTitle('Proof of Address')
        } else if (pathname === '/accountinformation/uploadphotograph') {
          setHeaderTitle('Upload Photograph')
        } else if (pathname === '/privacysecurity') {
          setHeaderTitle('Privacy Security')
        } else if (pathname === '/helpsupport') {
          setHeaderTitle('Help Support')
        } else if (pathname === '/payment') {
          setHeaderTitle('Payment')
        } else if (pathname === '/payment/addbank') {
          setHeaderTitle('Add Bank')
        }
      } else {
        console.log('Its mobile screen')
        if (pathname === '/profile') {
          setHeaderTitle('My Account')
        } else if (pathname === '/accountinformation') {
          setBackButton(true)
          setHeaderTitle('Account Information')
        } else if (pathname === '/privacysecurity') {
          setBackButton(true)
          setHeaderTitle('Privacy Security')
        } else if (pathname === '/helpsupport') {
          setBackButton(true)
          setHeaderTitle('Help Support')
        } else if (pathname === '/payment') {
          setBackButton(true)
          setHeaderTitle('Payment')
        }
      }

      if (pathname === '/wallet') {
        setBackButton(false)
        setHeaderTitle('Wallet')
      } else if (pathname === '/alert' || pathname === '/alertmanual') {
        setHeaderTitle('Alert')
      } else if (pathname === '/wallet/addfunds') {
        setBackButton(true)
        setHeaderTitle('Add Funds')
      } else if (pathname === '/wallet/withdraw') {
        setBackButton(true)
        setHeaderTitle('Withdraw')
      } else if (pathname.startsWith('/wallet/savinglock')) {
        setBackButton(true)
        setHeaderTitle('Invest')
      } else if (pathname.startsWith('/wallet/addfunds/banktransfer')) {
        setBackButton(true)
        setHeaderTitle('Bank Transfer')
      } else if (pathname.startsWith('/wallet/withdraw/otp')) {
        setBackButton(true)
        setHeaderTitle('Enter OTP')
      } else if (pathname === '/apps') {
        setHeaderTitle('Apps')
      }
    }
    handleResize()

    // Add event listener for resizing
    window.addEventListener('resize', handleResize)

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [pathname])

  // const pathsToCheck = [
  //   "/accountinformation/proofofid",
  //   "/accountinformation/proofofaddress",
  //   "/accountinformation/uploadphotograph",
  // ];

  // // Check if the current pathname contains any of the specified paths
  // const shouldShowBackArrow = pathsToCheck.some((path) =>
  //   pathname.includes(path)
  // );

  const dropdown = [
    {
      name: 'Profile',
      img: profileIcon,
      path: '/profile'
    },
    {
      name: 'Support',
      img: supportIcon,
      path: '/support'
    },
    {
      name: 'Log Out',
      img: logoutIcon,
      path: '/logout'
    }
  ]

  const navigate = useNavigate()

  const handleBackButtonClick = () => {
    if (screenWidth < 426) {
      if (history) {
        dispatch({ type: 'setHistory', payload: false })
        setBackButton(false)
        setHeaderTitle('Alert')
      } else if (profile) {
        dispatch({ type: 'setProfile', payload: false })
        setBackButton(false)
        setHeaderTitle('My Account')
      } else if (changePassword) {
        dispatch({ type: 'setChangePassword', payload: false })
        setBackButton(true)
        navigate(-1)
        setHeaderTitle('Privacy Security')
      } else if (addBank) {
        dispatch({ type: 'setAddBank', payload: false })
        setBackButton(true)
        navigate(-1)
        setHeaderTitle('Payment')
      } else if (accountInformation === 'accountInformation') {
        dispatch({ type: 'setAccountInformation', payload: '' })
        setBackButton(false)
        navigate(-1)
        setHeaderTitle('My Account')
      } else if (accountInformation === 'ProofOfID') {
        dispatch({
          type: 'setAccountInformation',
          payload: 'accountInformation'
        })
        navigate(-1)
        setHeaderTitle('Account Information')
      } else if (accountInformation === 'ProofOfAddress') {
        dispatch({
          type: 'setAccountInformation',
          payload: 'accountInformation'
        })
        navigate(-1)
        setHeaderTitle('Account Information')
      } else if (accountInformation === 'UploadPhotograph') {
        dispatch({
          type: 'setAccountInformation',
          payload: 'accountInformation'
        })
        navigate(-1)
        setHeaderTitle('Account Information')
      } else {
        navigate(-1)
      }
    } else {
      navigate(-1)
    }
  }

  useEffect(() => {
    if (screenWidth < 426) {
      console.log('history', history)
      if (history) {
        setHeaderTitle('History')
        setBackButton(true)
      } else if (!history && pathname === '/alertmanual') {
        setHeaderTitle('Alert')
        setBackButton(false)
      } else if (profile) {
        setBackButton(true)
        setHeaderTitle('Profile')
      } else if (changePassword) {
        setBackButton(true)
        setHeaderTitle('Change Password')
      } else if (addBank) {
        setBackButton(true)
        setHeaderTitle('Add Bank')
      } else if (accountInformation === 'accountInformation') {
        setBackButton(true)
        setHeaderTitle('Account Information')
      } else if (accountInformation === 'ProofOfID') {
        setBackButton(true)
        setHeaderTitle('Proof of ID')
      } else if (accountInformation === 'ProofOfAddress') {
        setBackButton(true)
        setHeaderTitle('Proof of Address')
      } else if (accountInformation === 'UploadPhotograph') {
        setBackButton(true)
        setHeaderTitle('Upload Photograph')
      }
    }
  }, [
    history,
    profile,
    changePassword,
    addBank,
    accountInformation,
    screenWidth
  ])

  return (
    <div className='header'>
      <div className='left-header'>
        <button className='menu-button' onClick={toggleMenu}>
          <IoIosMenu className='menu-icon' />
        </button>
        <div className='backAndHeader'>
          {backButton && (
            <MdKeyboardBackspace
              className='back'
              onClick={handleBackButtonClick}
              size={20}
            />
          )}
          {headerTitle && <p>{headerTitle}</p>}
        </div>
      </div>
      <div
        className={`left-side ${
          pathname === '/markets' ||
          pathname === 'marketsai' ||
          pathname === 'technicals'
            ? 'width-25'
            : 'pl'
        }`}
      >
        {headerTitle && <p>{headerTitle}</p>}
        {(pathname === '/markets' || pathname === '/technicals') && (
          <div className='search-bar'>
            <FiSearch color='#C3C3C3' />
            <input placeholder='Search' />
          </div>
        )}
      </div>
      {screenWidth > 425 &&
        (pathname === '/alert' || pathname === '/alertmanual') && (
          <div className='middle-header'>
            <Link
              to='/alert'
              className={`${
                pathname === '/alert'
                  ? 'active-middle-item'
                  : 'nonactive-middle-item'
              }`}
            >
              <p>AI Prompt</p>
            </Link>
            <Link
              to='/alertmanual'
              className={`${
                pathname === '/alertmanual'
                  ? 'active-middle-item'
                  : 'nonactive-middle-item'
              }`}
            >
              <p>Manual</p>
            </Link>
          </div>
        )}
      {screenWidth > 425 &&
        (pathname === '/markets' || pathname === '/marketsai') && (
          <div className='middle-header'>
            <Link
              to='/technicals'
              className={`${
                pathname === '/technicals'
                  ? 'active-middle-item'
                  : 'nonactive-middle-item'
              }`}
            >
              <p>Technicals</p>
            </Link>
            <Link
              to='/markets'
              className={`${
                pathname === '/markets'
                  ? 'active-middle-item'
                  : 'nonactive-middle-item'
              }`}
            >
              <p>Simple</p>
            </Link>
            <Link
              to='/marketsai'
              className={`${
                pathname === '/marketsai'
                  ? 'active-middle-item'
                  : 'nonactive-middle-item'
              }`}
            >
              <p>AI</p>
            </Link>
          </div>
        )}
      <div className='right-header'>
        {/* <div className="bell-icon">
          <img src={bellIcon} />
        </div> */}
        <GoBell className='bell-icon' />
        <div className='profile-dropdown'>
          <div
            onClick={() => setDropdownMenu(true)}
            className='profile-imageContainer'
          >
            <img src={profilePicture} alt='Profile' className='profile-image' />
            <FaChevronDown className='dropdown-icon' />
          </div>
        </div>
      </div>
      {dropdownMenu && (
        <div className='dropdown-content'>
          {dropdown.map((item, index) => (
            <Link
              to={item.path}
              onClick={() => setDropdownMenu(false)}
              key={index}
              className='dropdown-item'
            >
              <img src={item.img} alt={item.name} className='dropdown-img' />
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Header
