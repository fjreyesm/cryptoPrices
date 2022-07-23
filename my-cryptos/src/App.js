import React from "react";
import { useState, useEffect } from "react";
import CoinsRow from "./components/CoinsRow";
import styled from "styled-components";
import Header from "./components/Header";
//import LineChart from "./components/LineChart";

function App() {
  const [coins, setCoins] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const H3 = styled.h3`
    margin-left: 15rem;
    margin-right: 150px;
    letter-spacing: 0.8px;
  `;

  const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Opciones = styled(Filter)`
    justify-content: flex-end;
    margin-right: 7em;
    margin-bottom: 2.5em;
  `;

  const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;

    background: white;
    color: ${(props) => (props.primary ? "white" : "black")};
  `;

  const Table = styled.table`
    margin: 1em 0 0 0;
    letter-spacing: 0.8px;

    margin: 0 auto;
    width: 80%;
  `;

  const getCoins = async (url) => {
    try {
      console.log("entré en getCoins");

      const response = await fetch(url);

      if (response.ok) {
        const divisas = await response.json();

        setIsLoading(false);

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

  // const stable = () => {
  //   const url =
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&category=stablecoins&order=market_cap_desc&per_page=10&page=1&sparkline=true";
  //   fetchCoins(url);
  //   console.log("stable coin");
  // };

  const selectedCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log("error" + error);
  //{tabla();}
  //

  return (
    <>
      <Header />
      <div className="App">
        <H3> Lista de seguimiento</H3>

        <form style={{ marginLeft: "15rem" }}>
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
        <Opciones>
          <Button> Stable Coins</Button>
          <Button onClick={top5}> Top 5</Button>
          <Button onClick={top20}> Top 20</Button>
          <Button onClick={top100}> Top 100</Button>
        </Opciones>
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
              <th>30d</th>
              <th>24h Volumen</th>
              <th>7d Grafica</th>
            </tr>
          </thead>
          <tbody>
            {selectedCoins.map((coin) => {
              return (
                <>
                  <CoinsRow
                    key={coin.id ? coin.id : ""}
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
                      coin.market_cap_change_24h
                        ? coin.market_cap_change_24h
                        : 0
                    }
                    sparkline={coin.sparkline_in_7d ? coin.sparkline_in_7d : []}
                  />
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
