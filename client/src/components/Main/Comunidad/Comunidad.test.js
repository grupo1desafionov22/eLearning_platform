import React from "react";
import { shallow } from "enzyme";
import Comunidad from "./Comunidad";

describe("Comunidad", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Comunidad />);
    expect(wrapper).toMatchSnapshot();
  });
});
