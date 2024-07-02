import { useState } from "react";
import Button from "./buttons/Button";

function FileUpload() {
  const [file, setFile] = useState(null); // Initialisez le state à null pour indiquer l'absence d'image sélectionnée

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      // Vérifiez si une image a été sélectionnée
      const formData = new FormData();
      formData.append("myfile", file); // Utilisez le même clé 'image' que celle attendue par le back-end

      try {
        const response = await fetch("http://localhost:3310/api/upload", {
          method: "POST",
          body: formData, // Pas besoin d'en-tête 'Content-Type', il est défini automatiquement par le navigateur, autrement il faut gérer des Boundary
        });

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();
        console.info("Upload success", result);
      } catch (err) {
        console.error("Upload error", err);
      }
    } else {
      console.info("No image selected");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-5 flex items-center justify-around ml-40"
    >
      <label
        htmlFor="image"
        className="flex-col gap-3 w-56 h-56 flex outline-dashed outline-1 p-5 outline-[var(--secondary-color)] hover:bg-slate-300 mb-5"
      >
        {" "}
        Cliquez ou glissez votre fichier içi
        <svg
          width="64"
          height="53"
          viewBox="0 0 74 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54 71.4444H71M62.5 62.8889V80M37 3H16.6C11.8396 3 9.45932 3 7.64109 3.93251C6.04168 4.75273 4.74135 6.06156 3.92646 7.67142C3 9.50154 3 11.8973 3 16.6889V66.3111C3 71.1026 3 73.4986 3.92646 75.3287C4.74135 76.9384 6.04168 78.2474 7.64109 79.0674C9.45932 80 11.8396 80 16.6 80H32.75M37 3L62.5 28.6667M37 3V21.8222C37 24.218 37 25.4159 37.4633 26.331C37.8708 27.1359 38.5206 27.7903 39.3205 28.2004C40.2296 28.6667 41.4196 28.6667 43.8 28.6667H62.5M62.5 28.6667V41.5M20 62.8889H32.75M20 45.7778H45.5M20 28.6667H24.25"
            stroke="#CA2061"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          id="image"
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          accept="pdf"
        />
      </label>
      <Button type="submit" apply="medium" name="Télécharger" />
    </form>
  );
}

export default FileUpload;
