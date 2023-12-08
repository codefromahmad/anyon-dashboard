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
} from "./pages";
import AddFunds from "./pages/addfunds/AddFunds";
import BankTransfer from "./pages/banktransfer/BankTransfer";
import Withdraw from "./pages/withdraw/Withdraw";
import WithdrawOTP from "./pages/withdrawotp/WithdrawOTP";
import SavingLock from "./pages/savinglock/SavingLock";
import DurationSelection from "./pages/durationselection/DurationSelection";
import DaysLock from "./pages/dayslock/DaysLock";
import { useDispatch, useSelector } from "react-redux";

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

  const pData = [
    { time: "2023-01-01", value: 90 },
    { time: "2023-02-01", value: 120 },
    { time: "2023-03-01", value: 250 },
    { time: "2023-04-01", value: 130 },
    { time: "2023-05-01", value: 160 },
    { time: "2023-06-01", value: 170 },
    { time: "2023-07-01", value: 190 },
    { time: "2023-08-01", value: 250 },
    { time: "2023-09-01", value: 330 },
    { time: "2023-10-12", value: 460 },
    { time: "2023-11-12", value: 500 },
    { time: "2023-12-12", value: 620 },
    { time: "2024-01-12", value: 730 },
    { time: "2024-02-12", value: 560 },
    { time: "2024-03-12", value: 770 },
    { time: "2024-04-12", value: 800 },
    { time: "2024-05-12", value: 850 },
    { time: "2024-06-12", value: 930 },
  ];

  const nData = [
    { time: "2023-01-01", value: 930 },
    { time: "2023-02-01", value: 850 },
    { time: "2023-03-01", value: 800 },
    { time: "2023-04-01", value: 770 },
    { time: "2023-05-01", value: 560 },
    { time: "2023-06-01", value: 730 },
    { time: "2023-07-01", value: 620 },
    { time: "2023-08-01", value: 500 },
    { time: "2023-09-01", value: 460 },
    { time: "2023-10-12", value: 300 },
    { time: "2023-11-12", value: 250 },
    { time: "2023-12-12", value: 190 },
    { time: "2024-01-12", value: 170 },
    { time: "2024-02-12", value: 160 },
    { time: "2024-03-12", value: 130 },
    { time: "2024-04-12", value: 250 },
    { time: "2024-05-12", value: 120 },
    { time: "2024-06-12", value: 90 },
  ];

  const stocks = [
    {
      name: "BLS",
      price: "N10.50 (+5.0%)",
      data: pData,
      trend: "up",
    },
    {
      name: "CADBRY",
      price: "N10.50 (+5.0%)",
      data: pData,
      trend: "up",
    },
    {
      name: "CADBRY",
      price: "N10.50 (+5.0%)",
      data: nData,
      trend: "dn",
    },
    {
      name: "BLS",
      price: "N10.50 (+5.0%)",
      data: pData,
      trend: "up",
    },
    {
      name: "BLS",
      price: "N10.50 (+5.0%)",
      data: nData,
      trend: "dn",
    },
    {
      name: "CADBRY",
      price: "N10.50 (+5.0%)",
      data: nData,
      trend: "dn",
    },
    {
      name: "CADBRY",
      price: "N10.50 (+5.0%)",
      data: pData,
      trend: "up",
    },
    {
      name: "BLS",
      price: "N10.50 (+5.0%)",
      data: pData,
      trend: "up",
    },
    {
      name: "BLS",
      price: "N10.50 (+5.0%)",
      data: nData,
      trend: "dn",
    },
    {
      name: "BLS",
      price: "N10.50 (+5.0%)",
      data: nData,
      trend: "dn",
    },
  ];

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
              {/* <Route
                path="/marketsai"
                element={<MarketsAi stocks={stocks} />}
              /> */}

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
