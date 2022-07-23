import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Caution } from "./Header";

//render(<Caution />);
test("should verify return an string", () => {
  const text = Caution();
  expect(text).not.toBeNull();
  expect(text).toStrictEqual(
    <p>Precaucion : Los precios de las criptomonedas son estimados.</p>
  );
});
