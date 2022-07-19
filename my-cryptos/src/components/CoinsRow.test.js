import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

test("prueba suma", () => {
  const suma = (a, b) => a + b;
  expect(suma(1, 2)).toBe(3);
});
