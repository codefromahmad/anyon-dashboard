import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import "./App.css";
import { Alert, Apps, Holdings, Home, Markets, Wallet } from "./pages";
import AddFunds from "./pages/addfunds/AddFunds";
import BankTransfer from "./pages/banktransfer/BankTransfer";
import Withdraw from "./pages/withdraw/Withdraw";
import WithdrawOTP from "./pages/withdrawotp/WithdrawOTP";
import SavingLock from "./pages/savinglock/SavingLock";
import DurationSelection from "./pages/durationselection/DurationSelection";
import DaysLock from "./pages/dayslock/DaysLock";

function App() {
  return (
    <Router>
      <div className="app">
        <div classNmae="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallet/addfunds" element={<AddFunds />} />
            <Route path="/wallet/withdraw" element={<Withdraw />} />
            <Route path="/wallet/withdraw/otp" element={<WithdrawOTP/>} />
            <Route path="/wallet/addfunds/banktransfer" element={<BankTransfer />} />
            <Route path="/wallet/savinglock" element={<SavingLock/>} />
            <Route path="/wallet/savinglock/durationselection" element={<DurationSelection/>} />
            <Route path="/wallet/savinglock/durationselection/dayslock" element={<DaysLock/>} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
