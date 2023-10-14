import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      
          <RouterProvider router={routes}></RouterProvider>
      
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
