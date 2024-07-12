import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SearchInputConsultant from "../components/atomic/inputConsultant/searchInput/SearchInputConsultant";
import CardConsultant from "../components/atomic/card/CardConsultant";

function CandidateManagement() {
  const candidatesData = useLoaderData();

  const [inputContent, setInputContent] = useState("");
  const filteredGames = Array.isArray(candidatesData)
    ? candidatesData.filter((candidate) =>
        candidate.firstname.toLowerCase().includes(inputContent.toLowerCase())
      )
    : [];

  return (
    <main className="flex flex-col gap-10 min-h-screen">
      <h1 className="mt-10 self-center text-3xl text-[var(--primary-color)]">
        Vos Candidats
      </h1>
      <form className="self-center flex flex-col gap-4">
        <SearchInputConsultant
          id={1}
          placeholder="Rechercher des candidats..."
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
        <SearchInputConsultant
          id={2}
          placeholder="Rechercher des disponibilités..."
        />
      </form>
      <section className="mx-4 gap-5 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center">
        {candidatesData.length > 0 ? (
          filteredGames.map((candidate) => (
            <CardConsultant key={candidate.id} user={candidate} />
          ))
        ) : (
          <h2 className="text-2xl text-[var(--primary-color)] mt-20 outline outline-1 outline-[var(--primary-color)] p-10 rounded-lg">
            Aucun candidats pour le moment...
          </h2>
        )}
      </section>
    </main>
  );
}

export default CandidateManagement;
