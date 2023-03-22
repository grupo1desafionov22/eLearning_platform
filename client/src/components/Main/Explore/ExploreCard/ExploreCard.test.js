import React from "react";
import { shallow } from "enzyme";
import ExploreCard from "./ExploreCard";

describe("ExploreCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ExploreCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
