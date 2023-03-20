import React from "react";
import { shallow } from "enzyme";
import Admincardcourse from "./Admincardcourse";

describe("Admincardcourse", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Admincardcourse />);
    expect(wrapper).toMatchSnapshot();
  });
});
