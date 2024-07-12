import { Link, useLoaderData } from "react-router-dom";

function DashboardConsultant() {
const consultantData = useLoaderData();

  return (
    <main className="flex flex-col gap-20 items-center min-h-screen">
      <h1 className="mt-10 text-2xl text-[var(--primary-color)]">
        Bonjour, {consultantData.firstname} {consultantData.lastname}
      </h1>
      <Link
        to="/candidateManagement/:id"
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
