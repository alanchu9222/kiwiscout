import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import TravelPlan from "../components/TravelPlan";
import TravelCards from "../components/TravelCards";
import Flash from "../components/Flash";
import Update from "../components/U_update";
import Delete from "../components/U_delete";
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a navbar ", () => {
  expect(wrapped.find(NavBar).length).toEqual(1);
});

it("contains flash box", () => {
  expect(wrapped.find(Flash).length).toEqual(1);
});

it("contains delete component", () => {
  expect(wrapped.find(Delete).length).toEqual(1);
});

it("contains update component", () => {
  expect(wrapped.find(Update).length).toEqual(1);
});

it("contains switch component", () => {
  expect(wrapped.find(Switch).length).toEqual(1);
});
it("contains redirect component", () => {
  expect(wrapped.find(Redirect).length).toEqual(1);
});
it("contains route component", () => {
  expect(wrapped.find(Route).length).toEqual(2);
});
