import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  AccountInformation,
  Header,
  PopupSidebar,
  Sidebar,
} from "./components";
import {
  Alert,
  Apps,
  Holdings,
  Home,
  Markets,
  Wallet,
  Profile,
  AlertManual,
  MarketsAi,
  Technicals,
} from "./pages";
import AddFunds from "./pages/addfunds/AddFunds";
import BankTransfer from "./pages/banktransfer/BankTransfer";
import Withdraw from "./pages/withdraw/Withdraw";
import WithdrawOTP from "./pages/withdrawotp/WithdrawOTP";
import SavingLock from "./pages/savinglock/SavingLock";
import DurationSelection from "./pages/durationselection/DurationSelection";
import DaysLock from "./pages/dayslock/DaysLock";
import { useDispatch, useSelector } from "react-redux";
import { stocks } from "./constants";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);

  useEffect(() => {
    // Define the event handler function
    const handleLocationChange = () => {
      // This function will be called whenever the pathname changes
      // or when the user navigates back/forward in the browser.
      window.location.reload();
    };

    // Check if the pathname starts with "/wallet"
    const isWalletPage = window.location.pathname.startsWith("/wallet");
    // const isAccountInformationPage = window.location.pathname.startsWith(
    //   '/accountinformation'
    // )
    // const isPaymentPage = window.location.pathname.startsWith('/payment')
    // const isPrivacySecurityPage =
    //   window.location.pathname.startsWith('/privacysecurity')

    // Conditionally add or remove the event listener
    if (!isWalletPage && window.screenWidth > 425) {
      window.addEventListener("popstate", handleLocationChange);
    }

    // if (!isAccountInformationPage && window.screenWidth > 425) {
    //   window.addEventListener('popstate', handleLocationChange)
    // }

    // if (!isPaymentPage && window.screenWidth > 425) {
    //   window.addEventListener('popstate', handleLocationChange)
    // }

    // if (!isPrivacySecurityPage && window.screenWidth > 425) {
    //   window.addEventListener('popstate', handleLocationChange)
    // }

    // Cleanup the event listener when the component unmounts
    return () => {
      // Remove the event listener only if it was added
      if (!isWalletPage) {
        window.removeEventListener("popstate", handleLocationChange);
      }
    };
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    // Add event listener to handle scroll lock
    // const handleScroll = (event) => {
    //   if (openMenu) {
    //     event.preventDefault();
    //   }
    // };

    if (openMenu) {
      document.body.style.overflow = "hidden";
      // document.addEventListener('scroll', handleScroll, { passive: false });
    } else {
      document.body.style.overflow = "visible";
      // document.removeEventListener('scroll', handleScroll);
    }

    // Cleanup: remove event listener when component unmounts
    // return () => {
    //   document.body.style.overflow = 'visible';
    //   document.removeEventListener('scroll', handleScroll);
    // };
  }, [openMenu]);

  const handleOpenMenu = () => {
    setDropdownMenu(false);
    setOpenMenu(false);
  };

  const closeDropDownMenu = () => {
    setDropdownMenu(false);
  };

  return (
    <Router>
      <div className="app">
        {openMenu && (
          <div className="overlay" onClick={() => setOpenMenu(false)} />
        )}
        <div
          onClick={closeDropDownMenu}
          className={`popup-sidebar ${openMenu ? "open" : ""}`}
        >
          <PopupSidebar handleOpenMenu={handleOpenMenu} />
        </div>
        <div onClick={closeDropDownMenu} className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Header
            toggleMenu={toggleMenu}
            dropdownMenu={dropdownMenu}
            setDropdownMenu={setDropdownMenu}
          />
          <div onClick={closeDropDownMenu}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/markets" element={<Markets stocks={stocks} />} />
              <Route
                path="/technicals"
                element={<Technicals stocks={stocks} />}
              />

              <Route path="/marketsai" element={<MarketsAi />} />
              <Route path="/alert" element={<Alert />} />

              <Route path="/holdings" element={<Holdings />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/wallet/withdraw" element={<Withdraw />} />
              <Route path="/wallet/withdraw/otp" element={<WithdrawOTP />} />
              <Route path="/wallet/addfunds" element={<AddFunds />} />
              <Route
                path="/wallet/addfunds/banktransfer"
                element={<BankTransfer />}
              />

              <Route path="/wallet/savinglock" element={<SavingLock />} />
              <Route
                path="/wallet/savinglock/durationselection"
                element={<DurationSelection />}
              />
              <Route
                path="/wallet/savinglock/durationselection/dayslock"
                element={<DaysLock />}
              />

              {/* <Route path="/wallet" element={<Wallet />}>
              <Route path="withdraw" element={<Withdraw />}>
                <Route path="otp" element={<WithdrawOTP />} />
              </Route>
              <Route path="addfunds" element={<AddFunds />}>
                <Route path="banktransfer" element={<BankTransfer />} />
              </Route>
              <Route path="savinglock" element={<SavingLock />}>
                <Route path="durationselection" element={<DurationSelection />}>
                  <Route path="dayslock" element={<DaysLock />} />
                </Route>
              </Route>
            </Route> */}

              <Route path="/alertmanual" element={<AlertManual />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/accountinformation" element={<Profile />} />
              <Route
                path="/accountinformation/proofofid"
                element={<Profile />}
              />
              <Route
                path="/accountinformation/proofofaddress"
                element={<Profile />}
              />
              <Route
                path="/accountinformation/uploadphotograph"
                element={<Profile />}
              />
              <Route path="/privacysecurity" element={<Profile />} />
              <Route
                path="/privacysecurity/changepassword"
                element={<Profile />}
              />
              <Route path="/helpsupport" element={<Profile />} />
              <Route path="/payment" element={<Profile />} />
              <Route path="/payment/addbank" element={<Profile />} />
              <Route path="/apps" element={<Apps />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
