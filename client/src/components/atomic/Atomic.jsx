import SearchInputCandidat from "./inputCandidat/searchInput/SearchInputCandidat";
import SearchInputConsultant from "./inputConsultant/searchInput/SearchInputConsultant";
import FormInputCandidat from "./inputCandidat/formCandidat/FormInputCandidat";
import FormInputConsultant from "./inputConsultant/formConsultant/FormInputConsultant";
import ButtonOffer from "./buttons/ButtonOffer";
import Tag from "./tag/Tag";
import Card from "./card/Card";
import TagNotSelect from "./tag/TagNotSelect";
import TagStatusGreen from "./tag/TagStatusGreen";
import TagStatusOrange from "./tag/TagStatusOrange";
import TagStatusRed from "./tag/TagStatusRed";
import ButtonDeleteSmall from "./buttons/ButtonDeleteSmall";
import SmallCheckBox from "./checkBox/SmallCheckBox";
import BigCheckBox from "./checkBox/BigCheckBox";
import ButtonPostuler from "./buttons/ButtonPostuler";
import ButtonDelete from "./buttons/ButtonDelete";

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
          <form >
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
          <Card />
          <Card />
        </section>
        {/* END */}

        {/* CTA / SKILL / DISPONIBILITÉ */}
        <section className="border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44 p-4 mb-4 flex flex-wrap gap-4 items-center">
          <ButtonOffer />
          <Tag tag="REACT " />
          <TagNotSelect tag="JAVA" />
          <TagStatusGreen />
          <TagStatusOrange />
          <TagStatusRed />
          <ButtonDeleteSmall
            name="Supprimer"
            img="/src/assets/images/delete.svg"
            alt="supprimer"
          />
          <ButtonDeleteSmall
            name="Modifier"
            img="/src/assets/images/modifier.svg"
            alt="modifier"
          />
          <ButtonDeleteSmall
            name="Voir"
            img="/src/assets/images/open.svg"
            alt="voir"
          />
          <ButtonDeleteSmall
            name="Téléphone"
            img="/src/assets/images/phone.svg"
            alt="téléphone"
          />
          <ButtonDeleteSmall
            name="Email"
            img="/src/assets/images/mail.svg"
            alt="Email"
          />
          <ButtonDeleteSmall
            name="CV"
            img="/src/assets/images/cv.svg"
            alt="cv"
          />
          <SmallCheckBox />
          <BigCheckBox />
          <ButtonPostuler />
          <ButtonDelete />
        </section>
        {/* END */}
      </main>
      {/* LOGO SVG */}
      <footer className=" bg-slate-400 flex flex-wrap gap-4 p-4">
        <img
          src="./src/assets/images/linkedin.svg"
          alt="logo linkedin"
        />
        <img
          src="./src/assets/images/instagram.svg"
          alt="logo instagram"
        />
        <img
          src="./src/assets/images/twitter.svg"
          alt="logo twitter"
        />
        <img
          src="./src/assets/images/add.svg"
          alt="logo ajouter offre"
        />
        <img
          src="./src/assets/images/cv.svg"
          alt="logo voir cv"
        />
        <img
          src="./src/assets/images/delete.svg"
          alt="logo supprimer"
        />
        <img
          src="./src/assets/images/iconConnect.svg"
          alt="logo profil connecté"
        />
        <img
          src="./src/assets/images/iconDisconnect.svg"
          alt="logo profil déconnecté "
        />
        <img
          src="./src/assets/images/ICONLOC.svg"
          alt="logo localisation"
        />
        <img
          src="./src/assets/images/ICONSEARCH.svg"
          alt="logo recherche"
        />
        <img
          src="./src/assets/images/ICONSTACK.svg"
          alt="logo compétences"
        />
        <img
          src="./src/assets/images/mail.svg"
          alt="logo mail"
        />
        <img
          src="./src/assets/images/menuBurger.svg"
          alt="logo menu burger"
        />
        <img
          src="./src/assets/images/modifier.svg"
          alt="logo modifier"
        />
        <img
          src="./src/assets/images/notif.svg"
          alt="logo notification"
        />
        <img
          src="./src/assets/images/open.svg"
          alt="logo voir offre"
        />
        <img
          src="./src/assets/images/phone.svg"
          alt="logo téléphone"
        />
        <img
          src="./src/assets/images/signet.svg"
          alt="logo favori non séléectionné"
        />
        <img
          src="./src/assets/images/signetFull.svg"
          alt="logo favori sélectionné"
        />
        <img
          src="./src/assets/images/upload.svg"
          alt="logo télécharger cv"
        />
      </footer>
      {/* END */}
    </>
  );
}
