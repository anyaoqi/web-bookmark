import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from 'react-router-dom'
import App from "./App.jsx";
import store from "./store/index.js";
import router from './router/index.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider  router={router} />
    </Provider>
  </React.StrictMode>
);
