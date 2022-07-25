import React from "react";
import "../styles/board.css";
import GraphLast7d from "./GraphLast7d";
import styled from "styled-components";

export function Decimals(num) {
  return num.toFixed(2);
}

export function VerifyType(nft) {
  if (nft === "crypto") {
    return "Criptomonedas";
  } else {
    return "Tokens";
  }
}

const CoinsRow = ({
  id,
  name,
  price,
  image,
  symbol,
  pricechange1,
  pricechange24,
  pricechange7d,
  pricechange30d,
  volumen24h,
  sparkline,
}) => {
  const TdGraph = styled.td`
    width: 50px;
    align-items: center;
  `;
  return (
    <>
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
          <p>{price}€</p>
        </td>
        <td>
          {pricechange1 < 0 ? (
            <p className="red">{pricechange1.toFixed(2)}%</p>
          ) : (
            <p className="green">{pricechange1.toFixed(2)}%</p>
          )}
        </td>
        <td>
          {pricechange24 < 0 ? (
            <p className="red">{Decimals(pricechange24)}%</p>
          ) : (
            <p className="green">{pricechange24.toFixed(2)}%</p>
          )}
        </td>
        <td>
          {pricechange7d < 0 ? (
            <p className="red">{pricechange7d.toFixed(2)}%</p>
          ) : (
            <p className="green">{pricechange7d.toFixed(2)}%</p>
          )}
        </td>
        <td>
          {pricechange30d < 0 ? (
            <p className="red">{pricechange30d.toFixed(2)}%</p>
          ) : (
            <p className="green">{pricechange30d.toFixed(2)}%</p>
          )}
        </td>
        <td>
          <p>{volumen24h.toFixed(2)}€</p>
        </td>
        <TdGraph>
          {pricechange7d < 0 ? (
            <GraphLast7d spark={sparkline.price} color="red" nombre={name} />
          ) : (
            <GraphLast7d spark={sparkline.price} color="green" nombre={name} />
          )}
        </TdGraph>
      </tr>
    </>
  );
};

export default CoinsRow;
