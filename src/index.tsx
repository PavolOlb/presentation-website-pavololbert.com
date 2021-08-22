import "./index.css";
import { Components } from "./Root";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <Components />
  </div>,
  document.getElementById("root")
);

reportWebVitals();
