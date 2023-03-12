import React from "react";
import { shallow } from "enzyme";
import Head from "./Head";

describe("Head", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Head />);
    expect(wrapper).toMatchSnapshot();
  });
});
