import React from "react";
import "../styles/board.css";

const CoinsBoard = ({ id, name, price, image, symbol, total24h }) => {
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
        <p>{total24h}</p>
      </td>
      <td>
        <p>{price}</p>
      </td>
    </tr>
  );
};

export default CoinsBoard;
