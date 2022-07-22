import React, { Component } from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import fetch from "node-fetch";
import { Volumen } from "./App";
//render(<CoinsRow />);

let url = "https://api.coingecko.com/api/v3/coins/list";

test("should return API response with status 200", async () => {
  const response = await fetch(url);
  expect(response.status).toBe(200);
  //fireEvent.click(screen.getByRole('button', { name: /clear/ }'));
  //fireEvent.click(screen.getByRole('table',{}'));
});

test("debe devolver un boolean", () => {
  expect(typeof Volumen(1000)).toBe("boolean");
});
