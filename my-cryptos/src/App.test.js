import App from "./App";
import { render, screen } from "@testing-library/react";

let url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C";
//should retur API response with status 200
render(<App />);
test("should retur API response with status 200", async () => {
  const response = await fetch(url);
  expect(response.status).toBe(200);
});

//should retur API response with status 400
test("should retur API response with status 400", async () => {
  const response = await fetch(url);
  expect(response.status).toBe(400);
});

test("should verify h1 displays correct text", () => {
  render(<App />);
  const h1 = screen.getByText(/Coin/i);
  expect(h1).toBeInTheDocument();
});

test("should verify any img render", () => {
  render(<App />);
  const imag = screen.getByRole("img");
  expect(imag).toBeInTheDocument();
});

test("should sum coins", () => {
  const suma = (a, b) => a + b;
  expect(suma(1, 2)).toBe(3);
});

// test fecth coins
