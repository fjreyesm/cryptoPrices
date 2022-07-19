import React, { Component } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import fetch from "node-fetch";
import Header from "./components/Header";

/* import CoinsRow from "./components/CoinsRow";
render(<CoinsRow />);
test("should verify h1 displays correct text", () => {
  const p = screen.getByText(/coin/i);
  expect(p).toBeInTheDocument();
}); */

render(<Header />);

let url = "https://api.coingecko.com/api/v3/coins/list";
test("should sum coins", () => {
  const suma = (a, b) => a + b;
  expect(suma(1, 2)).toBe(3);
});

test("should return API response with status 200", async () => {
  const response = await fetch(url);
  expect(response.status).toBe(200);
});
