import { useLoaderData } from "react-router-dom";
import SearchInputConsultant from "../components/atomic/inputConsultant/searchInput/SearchInputConsultant";
import CardConsultant from "../components/atomic/card/CardConsultant";

function CandidateManagement() {
  const userData = useLoaderData();

  return (
    <main className="flex flex-col gap-10 min-h-screen">
      <h1 className="mt-10 self-center text-3xl text-[var(--primary-color)]">
        Vos Candidats
      </h1>
      <form className="self-center flex flex-col gap-4">
        <SearchInputConsultant id={1} placeholder="Rechercher des candidats..." />
        <SearchInputConsultant id={2} placeholder="Rechercher des disponibilités..." />
      </form>
      <section className="mx-4">
        {userData.candidates.map(candidate => (
          <CardConsultant 
            key={candidate.id} 
            name={candidate.firstname} 
            id={candidate.lastname} 
            tag={candidate.name} 
          />
        ))}
      </section>
    </main>
  );
}

export default CandidateManagement;