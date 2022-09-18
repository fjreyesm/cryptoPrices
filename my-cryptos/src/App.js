import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import CoinsTable from "./components/CoinsTable";
import styled from "styled-components";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [coins, setCoins] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const H3 = styled.h3`
    letter-spacing: 0.8px;
  `;

  const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  const Table = styled.table`
    margin: 1em 0 0 0;
    letter-spacing: 0.8px;
    margin: 0 auto;
    max-width: 1200px;
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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const top5 = () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=5&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C";
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

  const clearInput = () => {
    setSearch("");
  };

  const selectedCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Header />
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
          <Button onClick={top5}> Top 5</Button>
          <Button onClick={top20}> Top 20</Button>
          <Button onClick={top100}> Top 100</Button>
        </Opciones>
      </div>

      <Routes>
        <Route path="/" element={<CoinsTable coins={selectedCoins} />} />

        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>

      <Table></Table>

      <Footer className="prueba" />
    </>
  );
}

export default App;
