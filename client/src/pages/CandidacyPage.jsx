import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import FormInputCandidat from "../components/atomic/inputCandidat/formCandidat/FormInputCandidat";
import useCandidacyForm from "../services/useCandidacyForm";
import { AuthContext } from "../contexts/AuthContext";
import ButtonSubmit from "../components/atomic/buttons/ButtonSubmit";

function CandidacyPage() {
  const { offerId } = useParams();
  const userData = useContext(AuthContext);

  const [authId, setAuthId] = useState(null);

  const { formData, setFormData, handleChange } = useCandidacyForm();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const candidacyData = { ...formData, authId, offerId };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/candidacy/${offerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(candidacyData),
        }
      );
      return response;
    } catch (err) {
      throw new Error("Erreur lors de l'ajout de la candidature:", err);
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      <form onSubmit={handleSubmit}>
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
