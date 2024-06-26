import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import fetchApi from "./services/fetchApi";
import "../index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import OfferDetails from "./pages/OfferDetails";
import Dashboard from "./pages/Dashboard";

const offersUrl = "/api/offers";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/offers",
        element: <OfferPage />,
      },
      {
        path: "/offers/:id",
        element: <OfferDetails />,
        loader : ({ params }) => fetchApi(`${offersUrl}/${params.id}`),
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
