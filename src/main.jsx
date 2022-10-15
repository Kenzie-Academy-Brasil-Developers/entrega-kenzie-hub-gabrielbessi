import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { UserProvider } from "./contexts/user";
import App from "./App";
import "./index.css";
import { TechProvider } from "./contexts/tech";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <TechProvider>
          <App />
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
