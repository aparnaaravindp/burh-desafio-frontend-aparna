import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TechProvider } from "./providers/TechContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TechProvider>
      <App />
    </TechProvider>
  </React.StrictMode>
);
