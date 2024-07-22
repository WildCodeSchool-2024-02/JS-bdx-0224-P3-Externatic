import { useState } from "react";

const useCandidacyForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    setFormData,
    handleChange,
  };
};

export default useCandidacyForm;
