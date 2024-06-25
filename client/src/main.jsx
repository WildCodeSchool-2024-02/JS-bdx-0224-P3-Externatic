import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import OfferDetails from "./pages/OfferDetails";
import Dashboard from "./pages/Dashboard";
import CGU from "./pages/CGU";
import ProtectionDataPolitics from "./pages/ProtectionDataPolitics";
import LegalMentions from "./pages/LegalMentions";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/offer",
        element: <OfferPage />,
      },
      {
        path: "/offer/:id",
        element: <OfferDetails />,
      },
      {
        path: "/dashboard/:id",
        element: <Dashboard />,
      },
      {
        path: "/CGU",
        element: <CGU />,
      },
      {
        path: "/protectionDataPolitics",
        element: <ProtectionDataPolitics />,
      },
      {
        path: "/legalMentions",
        element: <LegalMentions />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
