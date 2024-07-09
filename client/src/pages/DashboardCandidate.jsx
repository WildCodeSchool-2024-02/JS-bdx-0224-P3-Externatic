import { useLoaderData } from "react-router-dom";
import FileUpload from "../components/atomic/FileUpload";
import Tag from "../components/atomic/tag/Tag";
import Button from "../components/atomic/buttons/Button";

function DashboardCandidate() {
  const data = useLoaderData()
  return (
    <main>
      <article className="p-5">
        <header className="mt-10 text-md">
          <h1 className=" text-[var(--primary-color)]">{data.firstname} {data.lastname}</h1>
          <p>Mail: {data.email}</p>
          <p>Tel: {data.phone}</p>
          <p >Localisation: Bordeaux</p>
        </header>
        <FileUpload />
        <h2 className="text-[var(--primary-color)] pb-3">Mes compétences</h2>
        <Tag text="REACT" apply="tag" />
        <h2 className="text-[var(--primary-color)] pb-3 pt-3">
          Mes préférences
        </h2>
        <Tag text="REACT" apply="tag" />
        <h2 className="text-[var(--primary-color)] pb-3 pt-3">Mes favoris</h2>
      </article>
      <footer className="flex flex-col gap-5 m-5">
        <Button
        type="button"
        apply="big"
        name="Déconnexion"
      />
        <Button
        type="button"
        apply="bigDelete"
        name="Supprimer mon compte"
      />
      </footer>
    </main>
  );
}

export default DashboardCandidate;
