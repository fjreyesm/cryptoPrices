import "./App.css";
import { useState, useEffect } from "react";
import CoinsBoard from "./components/CoinsBoard";

function App() {
  const [coins, setCoins] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getCoins = async () => {
    try {
      console.log("entré en getCoins");
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      );
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

  const fetchCoins = async () => {
    try {
      const data = await getCoins();
      setCoins(data);
      console.log("fetched: " + coins);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCoins();
    console.log("Despues de Fetch " + coins);
  }, [isLoading]);

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
  return (
    <>
      <div className="App">
        <h1>Crytos</h1>
        <h2>Tabla de Precios</h2>
        <form>
          <input
            type="text"
            placeholder="busqueda"
            className="busqueda"
            onChange={handleChange}
          />
        </form>

        <button onClick={siguiente}> Next</button>
        <h2>Filtrado</h2>
        {selectedCoins.map((coin) => {
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
        })}
      </div>
    </>
  );
}

export default App;
