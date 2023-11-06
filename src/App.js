import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import "./App.css";
import { Alert, Apps, Holdings, Home, Markets, Wallet } from "./pages";

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
            <Route path="/alert" element={<Alert />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
