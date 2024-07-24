export default async function fetchMultipleApi(urls) {
  const responses = await Promise.all(
    urls.map((url) =>
      fetch(import.meta.env.VITE_API_URL + url).then((response) =>
        response.json()
      )
    )
  );
  return responses;
}
