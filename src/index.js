import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";

store.dispatch({ type: "account/deposit", payload: 250 });
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* now are application knows about the redux store, which every single component in the application can now read data from the store and can dispatch actions to it, so it's basically broadcasting global state into every component that actually wants to read it */}
      <App />
    </Provider>
  </React.StrictMode>
);
