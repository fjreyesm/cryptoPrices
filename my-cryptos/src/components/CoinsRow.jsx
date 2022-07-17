import React from "react";
import "../styles/board.css";
import GraphLast7d from "./GraphLast7d";

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
  console.log(
    "id" +
      id +
      "name" +
      name +
      "price" +
      price +
      "image" +
      image +
      "symbol" +
      symbol +
      "pricechange1" +
      pricechange1 +
      "pricechange24" +
      pricechange24 +
      "pricechange7d" +
      pricechange7d +
      "pricechange30d" +
      pricechange30d +
      "volumen24h" +
      volumen24h +
      "sparkline" +
      sparkline
  );
  return (
    <>
      <tr className="coins-rows">
        no entra en tabla
        <td>
          no entra en elemento
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
            <p className="red">{pricechange24.toFixed(2)}%</p>
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
        <td>
          {pricechange7d < 0 ? (
            <GraphLast7d spark={sparkline.price} color="red" nombre={name} />
          ) : (
            <GraphLast7d spark={sparkline.price} color="green" nombre={name} />
          )}
        </td>
      </tr>
    </>
  );
};

export default CoinsRow;
