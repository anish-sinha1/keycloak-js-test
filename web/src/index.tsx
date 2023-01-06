import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as auth from "./auth/keycloak";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const render = () =>
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

auth.initKeycloak(render);

// reportWebVitals();
