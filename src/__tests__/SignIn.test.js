import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import NavBar from "../components/NavBar";
import TravelPlan from "../components/TravelPlan";
import TravelCards from "../components/TravelCards";
import Flash from "../components/Flash";
import Update from "../components/U_update";
import Delete from "../components/U_delete";

import Root from "Root";

it("sign in test ", () => {
  const wrapped = shallow(<NavBar />);
  expect(wrapped.find("#login-button").length).toEqual(1);
});
