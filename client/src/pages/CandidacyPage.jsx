import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import FormInputCandidat from "../components/atomic/inputCandidat/formCandidat/FormInputCandidat";
import useCandidacyForm from "../services/useCandidacyForm";

function CandidacyPage() {
  const candidacyData = useLoaderData();
  const usersUrl = "/api/users/1";

  const { formData, setFormData, handleChange } = useCandidacyForm();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + usersUrl);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données utilisateur:",
          error
        );
      }
    };

    fetchUserData();
  }, [setFormData]);

  return (
    <main className="flex flex-col min-h-screen">
      <form>
        <FormInputCandidat
          id="firstname"
          label="firstname"
          placeholder="Prénom"
          type="text"
          name="firstname"
          value={formData.firstname}
          handleChange={handleChange}
        />
        <FormInputCandidat
          id="lastname"
          label="lastname"
          placeholder="Nom"
          type="text"
          name="lastname"
          value={formData.lastname}
          handleChange={handleChange}
        />
        <FormInputCandidat
          id="email"
          label="e-mail"
          placeholder="email"
          type="text"
          name="email"
          value={formData.email}
          handleChange={handleChange}
        />
        <FormInputCandidat
          id="data"
          label="data"
          placeholder="data"
          type="text"
          name="data"
          value={candidacyData}
          handleChange={handleChange}
        />
      </form>
    </main>
  );
}

export default CandidacyPage;
