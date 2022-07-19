import App from "./App";
import { render, screen } from "@testing-library/react";

test("should verify h1 displays correct text", () => {
  render(<App />);
  const h1 = screen.getByText(/coin/i);
  expect(h1).toBeInTheDocument();
});

test("should sum coins", () => {
  const suma = (a, b) => a + b;
  expect(suma(1, 2)).toBe(3);
});
