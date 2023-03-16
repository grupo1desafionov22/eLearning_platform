import React from "react";
import { shallow } from "enzyme";
import CardCourse from "./CardCourse";

describe("CardCourse", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardCourse />);
    expect(wrapper).toMatchSnapshot();
  });
});
