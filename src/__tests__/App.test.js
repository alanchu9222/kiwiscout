import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import NavBar from "../components/NavBar";

// import thunk from "redux-thunk";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import reducers from "../reducers";

// const store = createStore(reducers, applyMiddleware(thunk));

it("shows a navbar ", () => {
  const wrapped = shallow(<App />);

  // <Provider store={store}>
  // <App />)
  // </Provider>
  expect(wrapped.find(NavBar).length).toEqual(1);

  console.log(Object.keys(wrapped));
});
