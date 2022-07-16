//import "./App.css";

import React from "react";

import { useState, useEffect } from "react";
import CoinsRow from "./components/CoinsRow";
import styled from "styled-components";
import useFetch from "./hooks/useFetch";
//import LineChart from "./components/LineChart";

function App() {
  const [coins, setCoins] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const Title = styled.h1`
    margin: 1em 0 0 0;
    letter-spacing: 0.8px;
  `;

  const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;

    background: ${(props) => (props.primary ? "orange" : "white")};
    color: ${(props) => (props.primary ? "white" : "black")};
  `;

  const getCoins = async (url) => {
    try {
      console.log("entré en getCoins");

      const response = await fetch(url);

      if (response.ok) {
        const divisas = await response.json();

        setIsLoading(false);
        console.log("is loading?" + isLoading);
        return divisas;
      } else {
        setError("Hubo un error al obtener los datos");
      }
    } catch (error) {
      setError("No pudimos hacer la solicitud" + error);
    }
  };

  const fetchCoins = async (url) => {
    try {
      const data = await getCoins(url);
      console.log("is loading in fecht?" + isLoading);
      setCoins(data);

      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCoins(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C"
    );
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  const siguiente = () => {
    setIsLoading(true);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const top5 = () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=5&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C";
    fetchCoins(url);

    console.log("ltop 3");
    return <p> top 3</p>;
  };
  const top20 = () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C";
    fetchCoins(url);

    console.log("top 5");
    return <p> top 3</p>;
  };

  const top100 = () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C";
    fetchCoins(url);

    console.log("top 5");
    return <p> top 3</p>;
  };

  const selectedCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log("error" + error);
  //{tabla();}
  //

  return (
    <>
      <div className="App">
        <Title>Tabla de Crytomonedas </Title>

        <form>
          <input
            type="text"
            placeholder="busqueda"
            className="busqueda"
            onChange={handleChange}
          />
        </form>
        <Button onClick={top5}> Top 5</Button>
        <Button onClick={top20}> Top 20</Button>
        <Button onClick={top100}> Top 100</Button>

        <table className="tabla">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Simbolo</th>
              <th>Precio</th>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>30d</th>
              <th>24h Volumen</th>
            </tr>
          </thead>
          <tbody>
            {selectedCoins.map((coin) => {
              return (
                <>
                  <CoinsRow
                    key={coin.id}
                    id={coin.id}
                    name={coin.name}
                    symbol={coin.symbol}
                    image={coin.image}
                    price={coin.current_price}
                    pricechange1={coin.price_change_percentage_1h_in_currency}
                    pricechange24={coin.price_change_percentage_24h_in_currency}
                    pricechange7d={coin.price_change_percentage_7d_in_currency}
                    pricechange30d={
                      coin.price_change_percentage_30d_in_currency
                    }
                    volumen24h={coin.market_cap_change_24h}
                    sparkline={coin.sparkline_in_7d}
                  />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
