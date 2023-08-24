import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./store/userStore/UserProvider.tsx";
import { HouseProvider } from "./store/houseStore/HouseProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <HouseProvider>
        <App />
      </HouseProvider>
    </UserProvider>
  </React.StrictMode>
);
