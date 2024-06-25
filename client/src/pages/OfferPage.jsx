import { useLoaderData } from "react-router-dom";

import CardCandidate from "../components/atomic/card/CardCandidate";
import SearchInputCandidat from "../components/atomic/inputCandidat/searchInput/SearchInputCandidat";

function OfferPage() {
  const offers = useLoaderData()
  return (
    <main className="m-4 mt-12">
      <section className="my-4 gap-4 flex flex-col items-center md:flex-row md:justify-around">
        <SearchInputCandidat
          id="searchJob"
          placeholder="Rechercher un poste ..."
          iconSrc="./src/assets/images/ICONSEARCH.svg"
          alt="logo recherche"
        />
        <SearchInputCandidat
          id="searchJob"
          placeholder="Ville, région ou Pays"
          iconSrc="./src/assets/images/ICONLOC.svg"
          alt="logo recherche"
        />
        <SearchInputCandidat
          id="searchJob"
          placeholder="Compétences, Stack"
          iconSrc="./src/assets/images/ICONSTACK.svg"
          alt="logo recherche"
        />
      </section>
      <section className="gap-4 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center">
        {offers.map((offer) => (
          <CardCandidate key={offer.id} offer={offer}/>
        ))}
      </section>
    </main>
  );
}

export default OfferPage;
