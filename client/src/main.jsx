import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import fetchApi from "./services/fetchApi";
import fetchMultipleApis from "./services/fetchMultipleApi";

import "../index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import OfferDetails from "./pages/OfferDetails";
import CGU from "./pages/CGU";
import ProtectionDataPolicy from "./pages/ProtectionDataPolicy";
import LegalMentions from "./pages/LegalMentions";
import Contact from "./pages/Contact";
import CreateOfferPage from "./pages/CreateOfferPage";
import ProtectedRoute from "./components/ProtectedRoutes";
import DashboardConsultant from "./pages/DashboardConsultant";
import DashboardCandidate from "./pages/DashboardCandidate";
import CandidateManagement from "./pages/CandidateManagement";

const offersUrl = "/api/offers";
const technosUrl = "/api/technos";
const jobsUrl = "/api/jobs";
const companiesUrl = "/api/companies";
const urls = [technosUrl, jobsUrl, companiesUrl];
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
        path: "/offersCreate",
        element: <CreateOfferPage />,
        loader: async () => fetchMultipleApis(urls),
      },
      {
        path: "/dashboardConsultant/:id",
        element: <DashboardConsultant />,
        loader: ({ params }) => fetchApi(`${usersUrl}/${params.id}`),
      },
      {
        path: "/dashboardCandidate/:id",
        element: (
          <ProtectedRoute
            element={<DashboardCandidate />}
            roles={["candidat"]}
          />
        ),
        loader: ({ params }) => fetchApi(`${usersUrl}/${params.id}`),
      },
      {
        path: "/candidateManagement/:id",
        element: <CandidateManagement />,
        loader: ({ params }) =>
          fetchApi(`${usersUrl}/consultants/${params.id}`),
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
    ],
    loader: async () => fetchApi(usersUrl),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
