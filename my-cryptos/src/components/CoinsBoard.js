import React from "react";
import "../styles/board.css";
import styled from "styled-components";

const CoinsBoard = ({
  id,
  name,
  price,
  image,
  symbol,
  pricechange24,
  total24h,
}) => {
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
        {pricechange24 < 0 ? (
          <p className="red">{pricechange24.toFixed(2)}%</p>
        ) : (
          <p className="green">{pricechange24.toFixed(2)}%</p>
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
      <td>
        <p>{price}</p>
      </td>
      <td>
        <p>{total24h}</p>
      </td>
    </tr>
  );
};

export default CoinsBoard;
