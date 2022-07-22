import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Header from "./Header";

render(<Header />);

test("shoul have title ", () => {
  const suma = (a, b) => a + b;
  expect(suma(1, 2)).toBe(3);
});
