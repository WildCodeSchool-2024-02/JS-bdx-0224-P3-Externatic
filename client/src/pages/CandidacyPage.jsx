import { useEffect, useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FormInputCandidat from "../components/atomic/inputCandidat/formCandidat/FormInputCandidat";
import useCandidacyForm from "../services/useCandidacyForm";
import { AuthContext } from "../contexts/AuthContext";
import ButtonSubmit from "../components/atomic/buttons/ButtonSubmit";
import PreviousPage from "../components/atomic/buttons/PreviousPage";
import ScrollToTop from "../services/scrollToTop";

function CandidacyPage() {  
  ScrollToTop();

  const userLoaderData = useLoaderData();

  const { offerId } = useParams();

  const userData = useContext(AuthContext);

  const [authId, setAuthId] = useState(null);

  const { formData, setFormData, handleChange, handleSubmit } = useCandidacyForm();

  useEffect(() => {
    if (userData.auth.id !== authId) {
      setAuthId(userData.auth.id);
    }
  }, [userData, authId]);

  useEffect(() => {
    setFormData(userLoaderData[authId]);
  }, [setFormData, userLoaderData, authId]); 

  if (!formData) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <PreviousPage source={`/offers/${offerId}`} marginLeft="ml-10" />
      <form className="flex flex-col gap-5 items-center mt-10" onSubmit={(e) => handleSubmit(e, offerId, authId)}>
        <h1 className="text-[var(--secondary-color)] mb-10">Postuler à l'offre d'emploi</h1>
        <FormInputCandidat
          id="firstname"
          label="Prénom"
          placeholder="Renseignez votre prénom ici..."
          type="text"
          name="firstname"
          value={formData.firstname}
          handleChange={handleChange}
        />
        <FormInputCandidat
          id="lastname"
          label="Nom"
          placeholder="Renseignez votre nom ici..."
          type="text"
          name="lastname"
          value={formData.lastname}
          handleChange={handleChange}
        />
        <FormInputCandidat
          id="email"
          label="E-mail"
          placeholder="Renseignez votre e-mail ici..."
          type="text"
          name="email"
          value={formData.email}
          handleChange={handleChange}
        />
        <ButtonSubmit apply="big" name="Postuler" />
      </form>
    </main>
  );
}

export default CandidacyPage;