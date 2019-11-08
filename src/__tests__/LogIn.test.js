import React from "react";
import { mount } from "enzyme";
import NavBar from "../components/NavBar";
import Root from "../Root";
describe("Login Test", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <NavBar></NavBar>
      </Root>
    );
  });

  it("Press Login BUtton", () => {
    expect(wrapped.find("#login-button").length).toEqual(2);
  });
});
