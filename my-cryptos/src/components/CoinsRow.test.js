import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Decimals } from "./CoinsRow";
import { VerifyType } from "./CoinsRow";

test("should have 2 decimals", () => {
  const numero = Decimals(0.178778778);

  expect(numero).toBe("0.18");
  //expect(numero).toEqual(0.18);
  expect("something").toEqual("something");
});

test("should verify  is a token", () => {
  const verified = VerifyType("Halo");
  expect(verified).toEqual("Tokens");
});
