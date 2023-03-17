import React from "react";
import { shallow } from "enzyme";
import Nav2 from "./Nav2";

describe("Nav2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Nav2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
