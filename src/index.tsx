import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import UserStore from "./store/UserStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const stores = { user: new UserStore() };
root.render(
  <Provider {...stores}>
    <App />
  </Provider>
);
