import React from "react";
import { shallow } from "enzyme";
import AdminNav from "./AdminNav";

describe("AdminNav", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
