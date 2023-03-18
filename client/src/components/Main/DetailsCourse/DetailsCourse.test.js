import React from "react";
import { shallow } from "enzyme";
import DetailsCourse from "./DetailsCourse";

describe("DetailsCourse", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DetailsCourse />);
    expect(wrapper).toMatchSnapshot();
  });
});
