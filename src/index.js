import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux";

import "./index.css";
import App from "./App";

const aplication = (
  <Provider store={store}>
    <App />
  </Provider>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(aplication);
