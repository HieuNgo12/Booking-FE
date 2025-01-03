import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TourSearchContextProvider } from "../src/context/TourSearchContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Tạo một instance của QueryClient
const queryClient = new QueryClient();
import "./index.css";
import { Provider } from "react-redux"; // Import Provider từ react-redux
import store from "./Redux/Store.jsx"; // Import store đã tạo

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TourSearchContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </TourSearchContextProvider>
  </React.StrictMode>
);
