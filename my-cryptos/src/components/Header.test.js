import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Caution } from "./Header";
import Header from "./Header";

//render(<Caution />);
test("should verify Caution not return Null", () => {
  const text = Caution();
  expect(text).not.toBeNull();
});

test("should verify return a message: Precaucion : Los precios de las criptomonedas son estimados", () => {
  const text = Caution();
  expect(text).toStrictEqual(
    <p>Precaucion : Los precios de las criptomonedas son estimados.</p>
  );
});

test("should verify Header not return a Null", () => {
  const text1 = Header();
  expect(text1).not.toBeNull();
});
