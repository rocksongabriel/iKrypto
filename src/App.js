import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Homepage, Cryptocurrencies, Exchanges, CryptoDetails, News } from "./components";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default App;
