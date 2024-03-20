import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { createRoot } from "react-dom"; 
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain="dev-dell1mgc17xg51wz.us.auth0.com"
          clientId="hSHmTnjrmfO5IbWk5pFDAeKzAzCyLnP8"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);