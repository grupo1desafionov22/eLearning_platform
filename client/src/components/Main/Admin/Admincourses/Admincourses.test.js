import React from "react";
import { shallow } from "enzyme";
import Admincourses from "./Admincourses";

describe("Admincourses", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Admincourses />);
    expect(wrapper).toMatchSnapshot();
  });
});
