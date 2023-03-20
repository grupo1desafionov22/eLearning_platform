import React from "react";
import { shallow } from "enzyme";
import Creation from "./Creation";

describe("Creation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Creation />);
    expect(wrapper).toMatchSnapshot();
  });
});
