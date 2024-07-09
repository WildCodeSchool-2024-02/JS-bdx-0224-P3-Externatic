import FileUpload from "../components/atomic/FileUpload";
import Tag from "../components/atomic/tag/Tag";
import Button from "../components/atomic/buttons/Button";

function DashboardCandidate() {
  return (
    <main>
      <article className="p-5">
        <header className="mt-10 text-md">
          <h1 className="p-3 text-[var(--primary-color)]">Johnny BeGood</h1>
          <p>Mail: johnny@gmail.com</p>
          <p>Tel: 054838292</p>
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
