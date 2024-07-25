import { useState, useEffect } from "react";

const useDashboardCandidateService = (data, logout, navigate, Reload) => {
  const [favorites, setFavorites] = useState([]);
  const [formData, setFormData] = useState({
    email: data.email || "",
    phone: data.phone || "",
    name: data.name || "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/favorites`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        setFavorites(result);
      } catch (err) {
        throw new Error("Error fetching favorites", err);
      }
    };

    fetchFavorites();
  }, [data.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await response.json();
      setIsEditing(false);
    } catch (err) {
      throw new Error("Error updating user:", err);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${data.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      logout();
      navigate("/");
      Reload();
    } catch (err) {
      throw new Error("Error deleting account:", err);
    }
  };

  return {
    favorites,
    formData,
    isEditing,
    setIsEditing,
    handleChange,
    handleSubmit,
    handleDeleteAccount,
  };
};

export default useDashboardCandidateService;
