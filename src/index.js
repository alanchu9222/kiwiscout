import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import "./index.css";

// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import "./index.css";
// import reducers from "./reducers";
// const store = createStore(reducers, applyMiddleware(thunk));

import App from "./App";
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
