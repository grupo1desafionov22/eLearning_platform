import React from "react";
import { shallow } from "enzyme";
import ListCourses from "./ListCourses";

describe("ListCourses", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListCourses />);
    expect(wrapper).toMatchSnapshot();
  });
});
