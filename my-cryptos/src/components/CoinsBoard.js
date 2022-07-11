import React from "react";
import "../styles/board.css";
import styled from "styled-components";
import LineChart from "./LineChart";
import GraphLast7d from "./GraphLast7d";
//import { Line } from "@ant-design/charts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  volumen24h,
  sparkline,
}) => {
  console.log("spark " + sparkline.price);
  console.log("spark " + typeof sparkline.price);
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
          <GraphLast7d spark={sparkline.price} />
        </td>
      </tr>
    </>
  );
};

export default CoinsBoard;
