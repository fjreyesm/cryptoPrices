import CoinsRow from "../../components/CoinsRow";
import { shallow } from "enzyme";
import React from "react";

describe("CoinsRow", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CoinsRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
