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
import CGU from "./pages/CGU";
import ProtectionDataPolicy from "./pages/ProtectionDataPolicy";
import LegalMentions from "./pages/LegalMentions";
import Contact from "./pages/Contact";
import ConsultantProfil from "./pages/ConsultantProfil";

const offersUrl = "/api/offers";
const usersUrl = "/api/users";

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
        loader: async () => fetchApi(offersUrl),
      },
      {
        path: "/offers/:id",
        element: <OfferDetails />,
        loader: ({ params }) => fetchApi(`${offersUrl}/${params.id}`),
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
        path: "/protectionDataPolicy",
        element: <ProtectionDataPolicy />,
      },
      {
        path: "/legalMentions",
        element: <LegalMentions />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/consultantProfil/:id",
        element: <ConsultantProfil />,
        loader: ({ params }) => fetchApi(`${usersUrl}/${params.id}`),
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
