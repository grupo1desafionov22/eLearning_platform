import React from "react";
import { shallow } from "enzyme";
import Adminlistcourses from "./Adminlistcourses";

describe("Adminlistcourses", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Adminlistcourses />);
    expect(wrapper).toMatchSnapshot();
  });
});
