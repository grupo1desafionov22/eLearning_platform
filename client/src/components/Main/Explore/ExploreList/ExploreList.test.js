import React from "react";
import { shallow } from "enzyme";
import ExploreList from "./ExploreList";

describe("ExploreList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ExploreList />);
    expect(wrapper).toMatchSnapshot();
  });
});
