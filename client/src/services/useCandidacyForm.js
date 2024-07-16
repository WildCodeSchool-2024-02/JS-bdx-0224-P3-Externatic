import { useState } from "react";
import { sendUser } from "./fetchApi";

const useCandidacyForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    technos: "",
    cv: "",
    motivationLetter: "",
  });

  const usersUrl = "/api/users";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitCandidacy = async (e) => {
    e.preventDefault();

    const sendCandidacy = sendUser;

    try {
      const response = await sendCandidacy(usersUrl, formData, "POST");
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmitCandidacy,
  };
};

export default useCandidacyForm;
