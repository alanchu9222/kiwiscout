import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import NavBar from "../components/NavBar";
import TravelPlan from "../components/TravelPlan";
import TravelCards from "../components/TravelCards";
import Flash from "../components/Flash";
import Update from "../components/U_update";
import Delete from "../components/U_delete";

it("shows a navbar ", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(NavBar).length).toEqual(1);
});

it("contains flash box", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Flash).length).toEqual(1);
});

it("contains delete component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Delete).length).toEqual(1);
});

it("contains update component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Update).length).toEqual(1);
});

it("contains travel cards component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(TravelCards).length).toEqual(1);
});
it("contains travel plan component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(TravelPlan).length).toEqual(1);
});
