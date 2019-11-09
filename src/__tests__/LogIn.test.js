import React from "react";
import { mount } from "enzyme";
//import NavBar from "../components/NavBar";
import App from "../App";

import Root from "../Root";
describe("Login Test", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <App />
      </Root>
    );
  });

  it("Has Login Button on main Navbar", () => {
    wrapped.update();

    const mainNavbar = wrapped.find("#nav-mobile");
    console.log(mainNavbar.debug());
    console.log(
      mainNavbar
        .find("#button-login")
        .first()
        .debug()
    );
    expect(mainNavbar.find("#button-login").first().length).toEqual(1);
    mainNavbar
      .find("#button-login")
      .first()
      .simulate("click");
    // console.log(
    //   "----------------------------Before Login Modal----------------------------"
    // );
    // console.log(
    //   wrapped
    //     .find("#modal-login")
    //     .first()
    //     .debug()
    // );

    wrapped.update();

    // console.log(
    //   "----------------------------After Login Modal----------------------------"
    // );
    // console.log(
    //   wrapped
    //     .find("#modal-login")
    //     .first()
    //     .debug()
    // );

    const form = wrapped.find("#login-form");

    // console.log(
    //   form
    //     .find(".btn")
    //     .first()
    //     .debug()
    // );
    const input1 = form.find("#login-email");
    const input2 = form.find("#login-password");
    input1.simulate("change", { target: { value: "test@yahoo.com" } });
    input2.simulate("change", { target: { value: "abc123" } });

    form
      .find(".btn")
      .first()
      .simulate("click");
    wrapped.update();

    // console.log(
    //   "----------------------------After Login ----------------------------"
    // );
    // console.log(wrapped.find("#nav-mobile").debug());
  });
});
