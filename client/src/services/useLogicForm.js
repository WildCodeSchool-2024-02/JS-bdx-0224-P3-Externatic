import { useState } from "react";
import { sendUser } from "./fetchApi";

const useLogicForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    city:"",
    type: "",
    technos: ""
  });

  const usersUrl = "/api/users";
  const loginUrl = "/api/login";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await sendUser(usersUrl, formData, "POST");
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };
      const response = await sendUser(loginUrl, loginData, "POST");

      if (response && response.status === 200) {
        const userData = await response.json();

        return userData;
      }
      return response;
    } catch (err) {
      return err;
    }
  };
  return {
    formData,
    handleChange,
    handleSubmitRegistration,
    handleSubmitLogin,
  };
}

export default useLogicForm;