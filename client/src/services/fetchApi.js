export default async function fetchApi(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

export async function sendUser(url, user, http) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: http,
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response;
  } catch (err) {
    return err;
  }
}
