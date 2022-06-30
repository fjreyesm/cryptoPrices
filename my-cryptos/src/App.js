import "./App.css";
import { useState, useEffect } from "react";
import CoinsBoard from "./components/CoinsBoard";

function App() {
  const [coins, setCoins] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCoins = async () => {
    try {
      console.log("entré en getCoins");
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      );
      const divisas = await response.json();
      return divisas;
    } catch (error) {
      throw error;
    }
  };

  const fetchCoins = async () => {
    try {
      const data = await getCoins();
      setCoins(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCoins();
    console.log("Despues de Fetch " + coins);
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  const tabla = () => {
    return coins.map((coin) => {
      return (
        <CoinsBoard
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          image={coin.image}
          price={coin.current_price}
        />
      );
    });
  };

  return (
    <>
      <div className="App">
        <h1>Tabla de Cryptos 11</h1>
        {tabla()}
      </div>
    </>
  );
}

export default App;
