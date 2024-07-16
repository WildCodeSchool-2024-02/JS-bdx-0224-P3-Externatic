import { useEffect, useContext, useState } from "react";
import FormInputCandidat from "../components/atomic/inputCandidat/formCandidat/FormInputCandidat";
import useCandidacyForm from "../services/useCandidacyForm";
import { AuthContext } from "../contexts/AuthContext";
import ButtonSubmit from "../components/atomic/buttons/ButtonSubmit";

function CandidacyPage() {
  const userData = useContext(AuthContext);

  const [authId, setAuthId] = useState(null);

  const { formData, setFormData, handleChange, handleSubmitCandidacy } = useCandidacyForm();

  if (userData.auth.id !== authId) {
    setAuthId(userData.auth.id);
  }

  const usersUrl = `/api/users/candidates/3`;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + usersUrl);
        const data = await response.json();
        setFormData(data[0]);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données utilisateur:",
          error
        );
      }
    };

    fetchUserData();
  }, [setFormData, usersUrl]);

  return (
    <main className="flex flex-col min-h-screen">
      <form>
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
        <FormInputCandidat
          id="letter"
          label="Lettre de motivation"
          placeholder="Ecrivez votre lettre de motivation ici..."
          type="textarea"
          name="letter"
          value={formData.letter}
          handleChange={handleChange}
        />
        <FormInputCandidat
          id="cv"
          label="CV"
          placeholder="Ajoutez votre CV ici..."
          type="file"
          name="cv"
          value={formData.cv}
          handleChange={handleChange}
        />
        <ButtonSubmit apply="big" name="Postuler" onClick={handleSubmitCandidacy} />
      </form>
    </main>
  );
}

export default CandidacyPage;
