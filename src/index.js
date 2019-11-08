import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import "./index.css";

import App from "./App";
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
