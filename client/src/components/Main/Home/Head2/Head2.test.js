import React from "react";
import { shallow } from "enzyme";
import Head2 from "./Head2";

describe("Head2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Head2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
