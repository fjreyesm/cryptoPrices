import React from "react";
import "../styles/board.css";
import styled from "styled-components";

const CoinsBoard = ({
  id,
  name,
  price,
  image,
  symbol,
  pricechange1,
  pricechange24,
  pricechange7d,
  pricechange30d,
  total24h,
}) => {
  console.log("1h " + pricechange1);
  console.log("24h " + pricechange24);
  console.log("7d " + pricechange7d);
  console.log("30d " + pricechange30d);
  return (
    <tr className="coins-rows">
      <td>
        <img src={image} alt={name} className="imagen" />
      </td>
      <td>
        <h2 className="cryptoname"> {name}</h2>
      </td>
      <td>
        <p>{symbol}</p>
      </td>

      <td>
        <p>{price}</p>
      </td>
      <td>
        {pricechange1 < 0 ? (
          <p className="red">{pricechange1}</p>
        ) : (
          <p className="green">{pricechange1}</p>
        )}
      </td>

      <td>
        {pricechange24 < 0 ? (
          <p className="red">{pricechange24.toFixed(2)}%</p>
        ) : (
          <p className="green">{pricechange24.toFixed(2)}%</p>
        )}
      </td>
      <td>
        {pricechange7d < 0 ? (
          <p className="red">{pricechange7d}</p>
        ) : (
          <p className="green">{pricechange7d}</p>
        )}
      </td>

      <td>
        {pricechange30d < 0 ? (
          <p className="red">{pricechange30d}</p>
        ) : (
          <p className="green">{pricechange30d}</p>
        )}
      </td>
      <td>
        <img
          loading="lazy"
          alt="tether (USDT) 7d chart"
          src="https://www.coingecko.com/coins/325/sparkline"
          width="135"
          height="50"
        ></img>
      </td>
    </tr>
  );
};

export default CoinsBoard;
