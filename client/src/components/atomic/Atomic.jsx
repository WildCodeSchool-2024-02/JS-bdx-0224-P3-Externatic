import ButtonDelete from "./buttons/ButtonDelete";
import ButtonMedium from "./buttons/ButtonMedium";
import ButtonPostuler from "./buttons/ButtonPostuler";
import ButtonSmall from "./buttons/ButtonSmall";
import CardCandidate from "./card/CardCandidate";
import BigCheckBox from "./checkBox/BigCheckBox";
import SmallCheckBox from "./checkBox/SmallCheckBox";
import FormInputCandidat from "./inputCandidat/formCandidat/FormInputCandidat";
import SearchInputCandidat from "./inputCandidat/searchInput/SearchInputCandidat";
import FormInputConsultant from "./inputConsultant/formConsultant/FormInputConsultant";
import SearchInputConsultant from "./inputConsultant/searchInput/SearchInputConsultant";
import Tag from "./tag/Tag";
import TagStatus from "./tag/TagStatus";
import CardConsultant from "./card/CardConsultant";

export default function Atomic() {
  return (
    <>
      {/* LOGO EXTERNATIC */}
      <header className="flex justify-center p-4 bg-[var(--secondary-background-color)]">
        <img
          className="h-12 md:h-20 lg:h-44 "
          src="./src/assets/Externatic.svg"
          alt="Logo externatic"
        />
      </header>
      {/* END */}

      <main className=" p-4">
        {/* TITLE */}
        <section className="border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44 p-4 mb-4">
          <h1 className=" max-md:text-2xl">Title-1 </h1>
          <h1 className="text-[var(--primary-color)] max-md:text-2xl">
            Title-1{" "}
          </h1>
          <h2 className="max-md:text-xl">Title-2 </h2>
          <h2 className="text-[var(--primary-color)] max-md:text-xl">
            Title-2{" "}
          </h2>
          <h3 className="max-md:text-lg">Title-3 </h3>
          <h3 className="text-[var(--primary-color)] max-md:text-lg">
            Title-3{" "}
          </h3>
        </section>
        {/* END */}

        {/* PARAGRAPHE */}
        <section className="border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44 p-4 mb-4">
          <p className="max-md:text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            perspiciatis officia consequuntur expedita, sequi doloremque dolor,
            aut quasi exercitationem doloribus dicta, facere ipsum rerum ratione
            cumque. Aperiam debitis sit eaque.
          </p>
          <p className="text-[var(--primary-color)] max-md:text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            perspiciatis officia consequuntur expedita, sequi doloremque dolor,
            aut quasi exercitationem doloribus dicta, facere ipsum rerum ratione
            cumque. Aperiam debitis sit eaque.
          </p>
        </section>
        {/* END */}

        {/* INPUT */}
        <section className="border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow min-h-44 p-4 mb-4 flex flex-col gap-4 items-center">
          <form>
            <FormInputCandidat id="champPrenom" label="PRÉNOM" type="text" />
            <FormInputCandidat id="champNom" label="NOM" type="text" />
            <FormInputCandidat id="champEmail" label="EMAIL" type="email" />
          </form>
          <form>
            <SearchInputConsultant
              id="searchCandidate"
              placeholder="Rechercher des candidats ..."
            />
          </form>
          <form>
            <SearchInputCandidat
              id="searchJob"
              placeholder="Rechercher un poste ..."
              iconSrc="./src/assets/images/ICONSEARCH.svg"
              alt="logo recherche"
            />
          </form>
          <form>
            <FormInputConsultant
              id="champOffre"
              label="TITRE DE L'OFFRE"
              type="text"
            />
            <FormInputConsultant
              id="champPoste"
              label="DÉTAILS DU POSTE"
              type="textarea"
            />
          </form>
        </section>
        {/* END */}

        {/* CARD */}
        <section className="flex gap-4 max-md:flex-col max-md:items-center max-md:justify-center">
          <CardCandidate />
          <CardConsultant />
        </section>
        {/* END */}

        {/* CTA / SKILL / DISPONIBILITÉ */}
        <section className="border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44 p-4 mb-4 flex flex-wrap gap-4 items-center">
          <ButtonMedium name="VOIR L'OFFRE" />
          <ButtonMedium name="INSCRIPTION" />
          <Tag tag="REACT " />
          <TagStatus
            text="DISPONIBLE"
            
            textColor="text-[var(--validation-color-ok)]"
            borderColor="border-[var(--validation-color-ok)]"
          />
          <TagStatus
            text="EN COURS"
            textColor="text-[var(--validation-color-in-progress)]"
            borderColor="border-[var(--validation-color-in-progress)]"
          />
          <TagStatus
            text="REFUSE"
            textColor="text-[var(--validation-color-no)]"
            borderColor="border-[var(--validation-color-no)]"
          />
          <ButtonSmall
            name="Supprimer"
            img="/src/assets/images/delete.svg"
            alt="supprimer"
          />
          <ButtonSmall
            name="Modifier"
            img="/src/assets/images/modifier.svg"
            alt="modifier"
          />
          <ButtonSmall
            name="Voir"
            img="/src/assets/images/open.svg"
            alt="voir"
          />
          <ButtonSmall
            name="Téléphone"
            img="/src/assets/images/phone.svg"
            alt="téléphone"
          />
          <ButtonSmall
            name="Email"
            img="/src/assets/images/mail.svg"
            alt="Email"
          />
          <ButtonSmall name="CV" img="/src/assets/images/cv.svg" alt="cv" />
          <SmallCheckBox />
          <BigCheckBox />
          <ButtonPostuler />
          <ButtonDelete />
        </section>
        {/* END */}
      </main>
      {/* LOGO SVG */}
      <footer className=" bg-slate-400 flex flex-wrap gap-4 p-4">
        <img src="./src/assets/images/linkedin.svg" alt="logo linkedin" />
        <img src="./src/assets/images/instagram.svg" alt="logo instagram" />
        <img src="./src/assets/images/twitter.svg" alt="logo twitter" />
        <img src="./src/assets/images/add.svg" alt="logo ajouter offre" />
        <img src="./src/assets/images/cv.svg" alt="logo voir cv" />
        <img src="./src/assets/images/delete.svg" alt="logo supprimer" />
        <img
          src="./src/assets/images/iconConnect.svg"
          alt="logo profil connecté"
        />
        <img
          src="./src/assets/images/iconDisconnect.svg"
          alt="logo profil déconnecté "
        />
        <img src="./src/assets/images/ICONLOC.svg" alt="logo localisation" />
        <img src="./src/assets/images/ICONSEARCH.svg" alt="logo recherche" />
        <img src="./src/assets/images/ICONSTACK.svg" alt="logo compétences" />
        <img src="./src/assets/images/mail.svg" alt="logo mail" />
        <img src="./src/assets/images/menuBurger.svg" alt="logo menu burger" />
        <img src="./src/assets/images/modifier.svg" alt="logo modifier" />
        <img src="./src/assets/images/notif.svg" alt="logo notification" />
        <img src="./src/assets/images/open.svg" alt="logo voir offre" />
        <img src="./src/assets/images/phone.svg" alt="logo téléphone" />
        <img
          src="./src/assets/images/signet.svg"
          alt="logo favori non séléectionné"
        />
        <img
          src="./src/assets/images/signetFull.svg"
          alt="logo favori sélectionné"
        />
        <img src="./src/assets/images/upload.svg" alt="logo télécharger cv" />
      </footer>
      {/* END */}
    </>
  );
}
