import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Coin.css";
import GraphLast7d from "../components/GraphLast7d";

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
          <caption> Variación de precios</caption>
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
          <caption> Fluctuacion </caption>
          <thead>
            <tr>
              <th>24h Low</th>
              <th>24h High</th>
              <th className="No-priority">Mkt Cap</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                {coin.market_data?.low_24h ? (
                  <p>{coin.market_data.low_24h.eur.toLocaleString()}€</p>
                ) : null}
              </td>
              <td>
                {coin.market_data?.high_24h ? (
                  <p>{coin.market_data.high_24h.eur.toLocaleString()}€</p>
                ) : null}
              </td>
              <td className="No-priority">
                {coin.market_data?.market_cap ? (
                  <p>{coin.market_data.market_cap.eur.toLocaleString()}€</p>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Box">
        <table>
          <caption> Repositorio</caption>
          <thead>
            <tr>
              <th>forks</th>
              <th>stars</th>
              <th className="No-priority">subscribers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {coin.developer_data?.forks ? (
                  <p>{coin.developer_data.forks}</p>
                ) : null}
              </td>
              <td>
                {coin.developer_data?.stars ? (
                  <p>{coin.developer_data.stars}</p>
                ) : null}
              </td>
              <td className="No-priority">
                {coin.developer_data?.subscribers ? (
                  <p>{coin.developer_data.subscribers}</p>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Coin;
