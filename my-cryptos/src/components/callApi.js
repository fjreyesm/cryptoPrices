import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinsList from "./CoinsBoard";

function CallApi() {
  const [coins, setCoins] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false"
        );
        const data = await result.json();
        setCoins(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
    console.log(coins);
  }, []);

  // coins.map((coin) => {
  return (
    <div>
      <h2>Call API 3</h2>
      {coins.map((coin) => {
        return (
          <CoinsList
            key={coin.id}
            name={coin.name}
            price={coin.price}
            image={coin.image}
          />
        );
      })}
    </div>
  );
}

export default CallApi;
