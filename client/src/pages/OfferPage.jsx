import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import useLogicForm from "../services/useLogicForm";
import CardOfferForCandidate from "../components/atomic/card/CardOfferForCandidate";
import SearchInputCandidat from "../components/atomic/inputCandidat/searchInput/SearchInputCandidat";
import { AuthContext } from "../contexts/AuthContext";
import decodeToken from "../services/decodedToken";

function OfferPage() {
  const { setAuth } = useContext(AuthContext);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = decodeToken(token);
      setAuth(userData);
    }
  },);

  const offers = useLoaderData();
  const { formData, handleChange } = useLogicForm();
  return (
    <main className="m-4 mt-12">
      <section
        title="Page d'offres"
        className="my-4 gap-4 flex flex-col items-center md:flex-row md:justify-around"
      >
        <SearchInputCandidat
          id="type"
          name="type"
          placeholder="Rechercher un poste ..."
          iconSrc="./src/assets/images/ICONSEARCH.svg"
          alt="logo recherche"
          value={formData.type}
          handleChange={handleChange}
        />
        <SearchInputCandidat
          id="city"
          name="city"
          placeholder="Ville, région ou Pays"
          iconSrc="./src/assets/images/ICONLOC.svg"
          alt="logo recherche"
          value={formData.city}
          handleChange={handleChange}
        />
        <SearchInputCandidat
          id="technos"
          name="technos"
          placeholder="Compétences, Stack"
          iconSrc="./src/assets/images/ICONSTACK.svg"
          alt="logo recherche"
          value={formData.technos}
          handleChange={handleChange}
        />
      </section>
      <section className="gap-5 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center">
        {offers
          .filter(
            (offer) =>
              offer.city
                .toLowerCase()
                .includes(formData.city.toLocaleLowerCase()) &&
              offer.type
                .toLowerCase()
                .includes(formData.type.toLocaleLowerCase()) &&
              offer.technos.some((techno) =>
                techno.name
                  .toLowerCase()
                  .includes(formData.technos.toLowerCase())
              )
          )
          .map((filteredOffer) => (
            <CardOfferForCandidate
              key={filteredOffer.id}
              offer={filteredOffer}
            />
          ))}
      </section>
    </main>
  );
}

export default OfferPage;
