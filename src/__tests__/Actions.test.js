import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import NavBar from "../components/NavBar";
import TravelPlan from "../components/TravelPlan";
import TravelCards from "../components/TravelCards";
import Flash from "../components/Flash";
import Update from "../components/U_update";
import Delete from "../components/U_delete";

it("place holder test ", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(NavBar).length).toEqual(1);
});
