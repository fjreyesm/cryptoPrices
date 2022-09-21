import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoinsRow from "./Board";
import Coin from "../routes/Coin";
import "../styles/board.css";

const Table = styled.table`
  margin: 1em 0 0 0;
  letter-spacing: 0.8px;
  margin: 0 auto;
  max-width: 1200px;
`;

function CoinsTable(props) {
  const [coins, setCoins] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const getCoins = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const divisas = await response.json();
        setIsLoading(false);

        return divisas;
      } else {
        setError("Hubo un error al obtener los datos");
        console.log(error);
      }
    } catch (error) {
      setError("No pudimos hacer la solicitud" + error);
    }
  };

  const fetchCoins = async (url) => {
    try {
      const data = await getCoins(url);

      setCoins(data);

      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const H3 = styled.h3`
    letter-spacing: 0.8px;
  `;

  const Opciones = styled(Filter)`
    justify-content: center;
    margin-bottom: 2.5em;
  `;

  const Button = styled.button`
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;

    background: white;
    color: black;
  `;

  useEffect(() => {
    fetchCoins(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  const top10 = () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C";
    fetchCoins(url);
  };
  const top20 = () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C";
    fetchCoins(url);
  };

  const top100 = () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C";
    fetchCoins(url);
  };

  const selectedCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  const clearInput = () => {
    setSearch("");
  };
  return (
    <>
      <div className="Options Options2">
        <div className="Busqueda">
          <H3> Lista de seguimiento</H3>
          <form>
            <input
              type="text"
              placeholder="busqueda"
              className="busqueda"
              onChange={handleChange}
            />

            <Button type="reset" className="btn" onClick={clearInput}>
              Clear
            </Button>
          </form>
        </div>
        <Opciones>
          {/*<Button> Stable Coins</Button> */}
          <Button onClick={top10}> Top 10</Button>
          <Button onClick={top20}> Top 20</Button>
          <Button onClick={top100}> Top 100</Button>
        </Opciones>
      </div>

      <Table>
        <thead>
          <tr className="MainTableheader">
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
          {selectedCoins.map((coin) => {
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
    </>
  );
}

export default CoinsTable;
