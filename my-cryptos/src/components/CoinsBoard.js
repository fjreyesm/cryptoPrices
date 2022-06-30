import React from "react";
import "../styles/board.css";

const CoinsBoard = ({ id, name, price, image, symbol }) => {
  return (
    <div className="coins-rows">
      <p>{id}</p>
      <img src={image} alt={name} className="imagen" />
      <h2 className="cryptoname"> {name}</h2>
      <p>{price}</p>
      <p>{symbol}</p>
    </div>
  );
};

export default CoinsBoard;
