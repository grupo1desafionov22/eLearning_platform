import React from "react";
import { shallow } from "enzyme";
import Edition from "./Edition";

describe("Edition", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Edition />);
    expect(wrapper).toMatchSnapshot();
  });
});
