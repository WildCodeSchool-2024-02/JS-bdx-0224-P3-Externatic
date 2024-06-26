export default async function fetchApi(url) {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + url);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Erreur lors de la récupération des données :", err);
      return null;
    }
  }