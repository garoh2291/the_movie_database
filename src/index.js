import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux";

import App from "./App";
import { MenuContextProvider } from "./context/provider";

const aplication = (
  <Provider store={store}>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </Provider>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(aplication);
