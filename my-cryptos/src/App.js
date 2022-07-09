//import "./App.css";
import { useState, useEffect } from "react";
import CoinsBoard from "./components/CoinsBoard";
import styled from "styled-components";

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

  const getCoins = async () => {
    try {
      console.log("entré en getCoins");
      console.log("is loading?" + isLoading);
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C"
      );
      console.log("response" + response);
      if (response.ok) {
        const divisas = await response.json();
        console.log("respuesta json" + divisas);
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

  const fetchCoins = async () => {
    try {
      const data = await getCoins();
      console.log("is loading in fecht?" + isLoading);
      setCoins(data);
      console.log("fetched: " + coins);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCoins();
    console.log("Despues de Fetch en Use effect" + coins);
    console.log("is loading in useEfect?" + isLoading);
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
  const selectedCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  //{tabla();}
  //
  return (
    <>
      <div className="App">
        <Title>Crytomonedas </Title>
        <h2>Tabla de Precios</h2>
        <form>
          <input
            type="text"
            placeholder="busqueda"
            className="busqueda"
            onChange={handleChange}
          />
        </form>
        <Button onClick={siguiente}> Siguientes</Button>

        <h2>Filtrado 2</h2>
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
                <CoinsBoard
                  key={coin.id}
                  id={coin.id}
                  name={coin.name}
                  symbol={coin.symbol}
                  image={coin.image}
                  price={coin.current_price}
                  pricechange1={coin.price_change_percentage_1h_in_currency}
                  pricechange24={coin.price_change_percentage_24h_in_currency}
                  pricechange7d={coin.price_change_percentage_7d_in_currency}
                  pricechange30d={coin.price_change_percentage_30d_in_currency}
                  volumen24h={coin.market_cap_change_24h}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
