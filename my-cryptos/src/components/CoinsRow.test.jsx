import CoinsRow from "../../components/CoinsRow";
import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("CoinsRow", () => {
  it("render Ethereum when Ethereum info is given", () => {
    //when
    render(
      <CoinsRow
        key={"ethereum"}
        id={"ethereum"}
        name={"Ethereum"}
        symbol={"eth"}
        image={
          "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        }
        price={0.1}
        pricechange1={1}
        pricechange24={1.5}
        pricechange7d={1.6}
        pricechange30d={1.7}
      />
    );

    // Then
    const heading = screen.getByText("Spain");
    const img = screen.getByRole("img");
    const tr = screen.getByRole("tr");
    const td = screen.getByRole("td");

    expect(heading).toBeInTheDocument();
    expect(tr).toBeInTheDocument();
    expect(td).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
    );
  });
});
