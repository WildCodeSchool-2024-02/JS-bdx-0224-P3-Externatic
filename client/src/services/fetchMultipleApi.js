export default async function fetchMultipleApis(urls) {
  const baseUrl = import.meta.env.VITE_API_URL;
  const fullUrls = urls.map((url) => baseUrl + url);

  try {
    const responses = await Promise.all(fullUrls.map((url) => fetch(url)));
    const dataPromises = responses.map((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
    return await Promise.all(dataPromises);
  } catch (err) {
    console.error("Erreur lors de la récupération des données :", err);
    throw err;
  }
}
