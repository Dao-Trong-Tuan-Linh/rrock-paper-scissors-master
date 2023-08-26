import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./store/userStore/UserProvider.tsx";
import { HouseProvider } from "./store/houseStore/HouseProvider.tsx";
import { StateProvider } from "./store/stateStore/StateProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <HouseProvider>
        <StateProvider>
          <App />
        </StateProvider>
      </HouseProvider>
    </UserProvider>
  </React.StrictMode>
);
