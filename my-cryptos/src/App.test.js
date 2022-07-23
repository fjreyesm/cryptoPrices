import React, { Component } from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import fetch from "node-fetch";
import Header from "./components/Header";

import CoinsRow from "./components/CoinsRow";
//render(<CoinsRow />);

/**
 * @jest-environment jsdom
 */

let url = "https://api.coingecko.com/api/v3/coins/list";

test("should return API response with status 200", async () => {
  const response = await fetch(url);
  expect(response.status).toBe(200);
});

test("should return API response with status 404", async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/FAKElist"
  );
  expect(response.status).toBe(404);
}, 10000);
