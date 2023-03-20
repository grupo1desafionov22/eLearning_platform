import React from "react";
import { shallow } from "enzyme";
import AdminHead from "./AdminHead";

describe("AdminHead", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminHead />);
    expect(wrapper).toMatchSnapshot();
  });
});
