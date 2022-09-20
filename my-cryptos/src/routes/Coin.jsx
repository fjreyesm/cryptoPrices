import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Coin.css";

const Coin = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="Box">
        <h1>{coin.name}</h1>
      </div>
      <div className="Box">
        <div className="Info">
          <div className="coin-heading">
            {coin.image ? <img src={coin.image.large} alt="imagen" /> : null}
            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/EUR</p> : null}
          </div>
          <div className="precio">
            {coin.market_data?.current_price ? (
              <h1>{coin.market_data.current_price.eur.toLocaleString()}€</h1>
            ) : null}
          </div>
        </div>
      </div>
      <div className="Box">
        <table>
          <thead>
            <tr>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th className="No-priority">14d</th>
              <th>30d</th>
              <th className="No-priority">1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {coin.market_data?.price_change_percentage_1h_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_1h_in_currency.eur.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_24h_in_currency.eur.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_7d_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_7d_in_currency.eur.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_14d_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_14d_in_currency.eur.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td className="No-priority">
                {coin.market_data?.price_change_percentage_30d_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_30d_in_currency.eur.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td className="No-priority">
                {coin.market_data?.price_change_percentage_1y_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_1y_in_currency.eur.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Box">
        <table>
          <thead>
            <tr>
              <th>24 Hour Low</th>
              <th>24h</th>
              <th>7d</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="hilow">
          <div className="row">
            <h4>24 Hour Low</h4>
            {coin.market_data?.low_24h ? (
              <p>€{coin.market_data.low_24h.usd.toLocaleString()}</p>
            ) : null}
          </div>
          <div className="row">
            <h4>24 Hour High</h4>
            {coin.market_data?.high_24h ? (
              <p>€{coin.market_data.high_24h.usd.toLocaleString()}</p>
            ) : null}{" "}
          </div>
          <div className="row">
            <h4>Market Cap</h4>
            {coin.market_data?.market_cap ? (
              <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="Box">
        <div className="github">
          <div className="row">
            <h4>forks</h4>
            {coin.developer_data?.forks ? (
              <p>{coin.developer_data.forks}</p>
            ) : null}
          </div>
          <div className="row">
            <h4>starts</h4>
            {coin.market_data?.high_24h ? (
              <p>{coin.developer_data.stars}</p>
            ) : null}{" "}
          </div>
          <div className="row">
            <h4>subscribers</h4>
            {coin.market_data?.market_cap ? (
              <p>{coin.developer_data.subscribers}</p>
            ) : null}
          </div>
          <div className="row No-priority">
            <h4>pulls requests merged</h4>
            {coin.market_data?.market_cap ? (
              <p>{coin.developer_data.pull_requests_merged}</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Coin;
