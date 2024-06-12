import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "../index.css";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import OfferDetails from "./pages/OfferDetails";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/offer",
        element: <OfferPage />
      },
      {
        path: "/offer/:id",
        element: <OfferDetails />
      },
      {
        path: "/dashboard/:id",
        element: <Dashboard />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
