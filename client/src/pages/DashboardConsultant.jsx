import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function DashboardConsultant() {
  const consultantData = useLoaderData();
  const {auth} = useContext(AuthContext);

  return (
    <main className="flex flex-col gap-20 items-center min-h-screen">
      <h1 className="mt-10 text-2xl text-[var(--primary-color)]">
        Bonjour, {consultantData.firstname} {consultantData.lastname}
      </h1>
      <Link
        to={`/candidateManagement/${auth.id}`}
        className="bg-[var(--primary-color)] text-[var(--primary-background-color)] rounded-lg w-64 h-20 text-center content-center"
      >
        Gestion Candidats
      </Link>
      <Link
        to="/"
        className="bg-[var(--primary-color)] text-[var(--primary-background-color)] rounded-lg w-64 h-20 text-center content-center"
      >
        Gestion Offres
      </Link>
      <Link
        to="/"
        className="bg-[var(--primary-color)] text-[var(--primary-background-color)] rounded-lg w-64 h-20 text-center content-center"
      >
        Mes Informations
      </Link>
    </main>
  );
}

export default DashboardConsultant;
