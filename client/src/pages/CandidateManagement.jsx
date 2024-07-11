import { useLoaderData } from "react-router-dom";
import SearchInputConsultant from "../components/atomic/inputConsultant/searchInput/SearchInputConsultant";
import CardConsultant from "../components/atomic/card/CardConsultant";

function CandidateManagement() {
  const candidatesData = useLoaderData();

  return (
    <main className="flex flex-col gap-10 min-h-screen">
      <h1 className="mt-10 self-center text-3xl text-[var(--primary-color)]">
        Vos Candidats
      </h1>
      <form className="self-center flex flex-col gap-4">
        <SearchInputConsultant placeholder="Rechercher des candidats..." />
        <SearchInputConsultant placeholder="Rechercher des disponibilités..." />
      </form>
      <section className="mx-4 gap-5 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center">
        {candidatesData.map((candidate) => (
          <CardConsultant key={candidate.id} user={candidate} />
        ))}
      </section>
    </main>
  );
}

export default CandidateManagement;
