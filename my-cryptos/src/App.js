import React from "react";
import { Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import CoinsTable from "./components/CoinsTable";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<CoinsTable />} />
        <Route path="coin/:coinId" element={<Coin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer className="BotPag" />
    </div>
  );
}

export default App;
