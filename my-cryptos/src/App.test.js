import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import App from "./App";

import Input from "react-validation/build/input";

test("renders content", () => {
  const note = {
    content: "This is a test",
    important: true,
  };

  // eslint-disable-next-line testing-library/render-result-naming-convention
});

test("renders tabla de crytos", () => {
  render(<App />);
  const linkElement = screen.queryByText(/bitcoin/i);
  expect(linkElement).toBeInTheDocument();
});

test("despliega tabla de crytos", () => {
  render(<App />);
  const linkElement = screen.queryByText(/bitcoin/i);
  expect(linkElement).toBeInTheDocument();
});

test("prueba suma", () => {
  const suma = (a, b) => a + b;
  expect(suma(1, 2)).toBe(3);
});
