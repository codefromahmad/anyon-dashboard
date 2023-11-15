import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, PopupSidebar, Sidebar } from "./components";
import { Alert, Apps, Holdings, Home, Markets, Wallet } from "./pages";
import AddFunds from "./pages/addfunds/AddFunds";
import BankTransfer from "./pages/banktransfer/BankTransfer";
import Withdraw from "./pages/withdraw/Withdraw";
import WithdrawOTP from "./pages/withdrawotp/WithdrawOTP";
import SavingLock from "./pages/savinglock/SavingLock";
import DurationSelection from "./pages/durationselection/DurationSelection";
import DaysLock from "./pages/dayslock/DaysLock";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

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
      document.body.style.overflow = 'hidden';
      // document.addEventListener('scroll', handleScroll, { passive: false });
    } else {
      document.body.style.overflow = 'visible';
      // document.removeEventListener('scroll', handleScroll);
    }

    // Cleanup: remove event listener when component unmounts
    // return () => {
    //   document.body.style.overflow = 'visible';
    //   document.removeEventListener('scroll', handleScroll);
    // };
  }, [openMenu]);


  return (
    <Router>
      <div className="app">
        {openMenu && (
          <div className="overlay" onClick={() => setOpenMenu(false)}></div>
        )}
        <div className={`popup-sidebar ${openMenu ? "open" : ""}`}>
          <PopupSidebar />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Header toggleMenu={toggleMenu} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallet/withdraw" element={<Withdraw />} />
            <Route path="/wallet/otp" element={<WithdrawOTP />} />
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

            <Route path="/alert" element={<Alert />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
