import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import GraphLast7d from "./GraphLast7d";
import { Grafica } from "./GraphLast7d";

test("debe devolver un boolean", () => {
  const sparkmuck = [
    0.06326422615718218, 0.06346830440989862, 0.06293082889977249,
    0.0632928323062167, 0.06307961706681883, 0.06256810792674171,
    0.06264315422507043, 0.06348163336245559, 0.06377465548937872,
    0.06317450846044273, 0.06333340483234845, 0.06364511362894769,
    0.06303479131435671, 0.06260963344919011, 0.0626443417408108,
    0.06246766259024842, 0.06262171778428183, 0.0625087859357958,
    0.06242961528873867, 0.06196837080480159, 0.06181445783202441,
  ];
  const color = "red";
  const coin = "bitcoin";
  expect(GraphLast7d({ sparkmuck, color, coin })).notToBe("null");
});

test("debe devolver un svg", () => {
  expect(typeof Grafica()).toBe("string");
});
