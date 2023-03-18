import React from "react";
import { shallow } from "enzyme";
import DetailCourseCard from "./DetailCourseCard";

describe("DetailCourseCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DetailCourseCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
