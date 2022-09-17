import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CoinsRow from "./Board";
import Coin from "../routes/Coin";
import "../styles/board.css";

const Table = styled.table`
  margin: 0 auto;
  width: 90%;
`;

function CoinsTable(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Simbolo</th>
          <th>Precio</th>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th className="no-priority ">30d</th>
          <th className="no-priority">24h Volumen</th>
          <th className="no-priority2">7d Grafica</th>
        </tr>
      </thead>
      <tbody>
        {props.coins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <CoinsRow
                id={coin.id ? coin.id : ""}
                name={coin.name ? coin.name : ""}
                symbol={coin.symbol ? coin.symbol : ""}
                image={coin.image ? coin.image : ""}
                price={coin.current_price ? coin.current_price : ""}
                pricechange1={
                  coin.price_change_percentage_1h_in_currency
                    ? coin.price_change_percentage_1h_in_currency
                    : 0
                }
                pricechange24={
                  coin.price_change_percentage_24h_in_currency
                    ? coin.price_change_percentage_24h_in_currency
                    : 0
                }
                pricechange7d={
                  coin.price_change_percentage_7d_in_currency
                    ? coin.price_change_percentage_7d_in_currency
                    : 0
                }
                pricechange30d={
                  coin.price_change_percentage_30d_in_currency
                    ? coin.price_change_percentage_30d_in_currency
                    : 0
                }
                volumen24h={
                  coin.market_cap_change_24h ? coin.market_cap_change_24h : 0
                }
                sparkline={coin.sparkline_in_7d ? coin.sparkline_in_7d : []}
              />
            </Link>
          );
        })}
      </tbody>
    </Table>
  );
}

export default CoinsTable;
