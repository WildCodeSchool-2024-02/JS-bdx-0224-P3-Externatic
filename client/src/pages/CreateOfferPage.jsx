import { useState } from "react";
import { useNavigate } from "react-router-dom";

import createOffer from "../services/createOffer";
import ReturnButton from "../components/atomic/buttons/PreviousPage";
import FormInputConsultant from "../components/atomic/inputConsultant/formConsultant/FormInputConsultant";
import FormDropDown from "../components/atomic/inputConsultant/formConsultant/FormDropDown";

function CreateOfferPage() {
  const navigate = useNavigate();
  const offersUrl = "/api/offers";

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    // company: "",
    // region: "",
    city: "",
    details: "",
    // techno: "",
    salary: "",
    advantages: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitOffer = async (e) => {
    e.preventDefault();
    try {
      const response = await createOffer(offersUrl, formData, "POST");
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Erreur lors de la soumission du formulaire :", err);
    }
    return navigate(`/`);
  };

  return (
    <main className="min-h-screen">
      <ReturnButton />
      <h1 className="my-6 text-center text-[var(--secondary-color)]">
        Ajoutez une offre
      </h1>
      <form
        className="flex flex-col my-16 items-center"
        onSubmit={handleSubmitOffer}
      >
        <FormInputConsultant
          id="title"
          name="title"
          label="Titre de l'offre"
          value={formData.title}
          handleChange={handleChange}
        />

        <FormDropDown
          id="type"
          label="Type d'offre"
          name="type"
          handleChange={handleChange}
          options={[
            { name: "CDI", id: 1 },
            { name: "CDD", id: 2 },
            { name: "Alternance", id: 3 },
          ]}
        />
        {/* <FormInputConsultant
          id="company"
          label="Nom de l'entreprise"
          value={formData.company}
          handleChange={handleChange}
        /> */}
        {/* <FormInputConsultant
          id="region"
          label="Région"
          value={formData.region}
          handleChange={handleChange}
        /> */}
        <FormInputConsultant
          id="city"
          name="city"
          label="Ville"
          value={formData.city}
          handleChange={handleChange}
        />
        <FormInputConsultant
          id="details"
          name="details"
          label="Description du poste"
          type="textarea"
          value={formData.details}
          handleChange={handleChange}
        />
        {/* <FormInputConsultant
          id="techno"
          label="Principales technologies"
          value={formData.techno}
          handleChange={handleChange}
        /> */}
        <FormInputConsultant
          id="salary"
          name="salary"
          label="Salaire annuel proposé (en Euro)"
          value={formData.salary}
          handleChange={handleChange}
        />
        <FormInputConsultant
          id="advantages"
          name="advantages"
          label="Avantages"
          type="textarea"
          value={formData.advantages}
          handleChange={handleChange}
        />
        <button type="submit" label="Publier">
          Publier
        </button>
      </form>
    </main>
  );
}

export default CreateOfferPage;
