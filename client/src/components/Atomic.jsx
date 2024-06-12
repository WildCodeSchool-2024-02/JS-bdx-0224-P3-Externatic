export default function Atomic() {
  return (
    <>
      {/* LOGO EXTERNATIC */}
      <header className=" flex justify-around p-4 bg-[var(--secondary-background-color)]">
        <img
          className=" h-12"
          src="./src/assets/Externatic.svg"
          alt="Logo externatic"
        />
        <img
          className="h-20"
          src="./src/assets/Externatic.svg"
          alt="Logo externatic"
        />
        <img
          className="h-44"
          src="./src/assets/Externatic.svg"
          alt="Logo externatic"
        />
      </header>
      {/* END */}

      <main className=" p-4">
        {/* TITLE */}
        <hgroup className="border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44 p-4 mb-4">
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
        </hgroup>
        {/* END */}

        {/* PARAGRAPHE */}
        <hgroup className="border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44 p-4 mb-4">
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
        </hgroup>
        {/* END */}

        {/* INPUT */}
        <hgroup className="border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44 p-4 mb-4 flex flex-col gap-4 items-center">
          <div className=" w-72 flex flex-col gap-4 max-sm:w-64">
            <label
              className="text-[var(--primary-color)] font-medium max-md:text-sm max-md:font-normal"
              htmlFor="champ"
            >
              PRÉNOM
            </label>
            <input
              className="  h-10 border-2 outline-[var(--primary-color)] rounded-s"
              id="champ"
              type="text"
            />
          </div>
          <div className="relative flex items-center w-[37rem] h-24 max-sm:w-64 max-sm:h-14">
            <label className="hidden" htmlFor="champ">
              Search
            </label>
            <input
              className="bg-[var(--secondary-background-color)] w-full h-full pl-12 pr-4 rounded-lg outline-[var(--primary-color)]"
              id="champ"
              type="search"
              placeholder="Rechercher des candidats ..."
            />
            <img
              src="./src/assets/images/ICONSEARCH.svg"
              alt="Search Icon"
              className="absolute left-4 w-6 h-6"
            />
          </div>
          <div className="relative flex items-center w-96 h-20 max-sm:w-64 max-sm:h-14">
            <label className="hidden" htmlFor="champ">
              Search
            </label>
            <input
              className="bg-[var(--secondary-background-color)] w-full h-full pl-12 pr-4 rounded-lg outline-[var(--primary-color)]"
              id="champ"
              type="search"
              placeholder="Rechercher un poste ..."
            />
            <img
              src="./src/assets/images/ICONSEARCH.svg"
              alt="Search Icon"
              className="absolute left-4 w-6 h-6"
            />
          </div>
          <div className="relative flex items-center w-96 h-20  max-sm:w-64 max-sm:h-14">
            <label className="hidden" htmlFor="champ">
              Search
            </label>
            <input
              className="bg-[var(--secondary-background-color)] w-full h-full pl-12 pr-4 rounded-lg outline-[var(--primary-color)]"
              id="champ"
              type="search"
              placeholder="Filtrer une ville / région ..."
            />
            <img
              src="./src/assets/images/ICONLOC.svg"
              alt="Search Icon"
              className="absolute left-4 w-6 h-6"
            />
          </div>
          <div className="relative flex items-center w-96 h-20 max-sm:w-64 max-sm:h-14">
            <label className="hidden" htmlFor="champ">
              Search
            </label>
            <input
              className="bg-[var(--secondary-background-color)] w-full h-full pl-12 pr-4 rounded-lg outline-[var(--primary-color)]"
              id="champ"
              type="search"
              placeholder="Filtrer par compétences ..."
            />
            <img
              src="./src/assets/images/ICONSTACK.svg"
              alt="Search Icon"
              className="absolute left-4 w-6 h-6"
            />
          </div>
          <div className="w-[34rem] flex flex-col gap-4 max-sm:w-64 max-md:w-96">
            <label
              className="text-[var(--primary-color)] font-medium max-md:text-sm max-md:font-normal"
              htmlFor="champ"
            >
              TITRE DE L'OFFRE
            </label>
            <input
              className=" h-12 border-2 outline-[var(--primary-color)] rounded-s "
              id="champ"
              type="text"
            />
          </div>
          <div className=" w-[34rem] flex flex-col gap-4 max-sm:w-64 max-md:w-96">
            <label
              className="text-[var(--primary-color)] font-medium max-md:text-sm max-md:font-normal"
              htmlFor="champ"
            >
              DÉTAILS DU POSTE
            </label>
            <input
              className="min-h-72 border-2 outline-[var(--primary-color)] rounded-s"
              id="champ"
              type="text"
            />
          </div>
        </hgroup>
        {/* END */}

        {/* CARD */}
        <hgroup className="flex gap-4 max-md:flex-col max-md:items-center max-md:justify-center">
          <section className=" max-w-xl border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44 p-4 bg-[var(--secondary-background-color)] mb-4 max-md:max-w-96 ">
            <header className="flex justify-between items-center mb-4">
              <h3 className="text-[var(--primary-color)] max-md:text-lg">
                Title-3{" "}
              </h3>
              <img src="./src/assets/images/signet.svg" alt="" />
            </header>
            <ul className="flex gap-1 relative mb-4">
              <li className="w-14 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
                REACT
              </li>
              <li className="w-14 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
                REACT
              </li>
              <li className="w-14 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
                REACT
              </li>
              <li className="w-28 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center absolute right-0 max-md:w-20 max-md:text-xs">
                BORDEAUX
              </li>
            </ul>
            <p className="text-content mb-4 max-md:text-sm">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              perspiciatis officia consequuntur expedita, sequi doloremque
              dolor, aut quasi exercitationem doloribus dicta, facere ipsum
              rerum ratione cumque. Aperiam debitis sit eaque.
            </p>
            <div className="flex justify-center">
              <button
                className="w-40 h-8 bg-[var(--primary-color)] font-semibold text-[var(--primary-background-color)] rounded-lg cursor-pointer max-md:w-36 max-md:h-8 max-md:text-sm"
                type="button"
              >
                LOREM IPSUM
              </button>
            </div>
          </section>
          <section className=" max-w-xl border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44  p-4 mb-4 bg-[var(--secondary-background-color)] max-md:max-w-96">
            <header className="flex justify-between items-center mb-4">
              <h3 className="text-[var(--primary-color)] max-md:text-lg">
                Title-3{" "}
              </h3>
              <img src="./src/assets/images/signet.svg" alt="" />
            </header>
            <ul className="flex gap-1 relative mb-4">
              <li className="w-14 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
                REACT
              </li>
              <li className="w-14 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
                REACT
              </li>
              <li className="w-14 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
                REACT
              </li>
              <li className="w-28 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center absolute right-0 max-md:w-20 max-md:text-xs">
                BORDEAUX
              </li>
            </ul>
            <p className="text-content mb-4 max-md:text-sm">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              perspiciatis officia consequuntur expedita, sequi doloremque
              dolor, aut quasi exercitationem doloribus dicta, facere ipsum
              rerum ratione cumque. Aperiam debitis sit eaque.
            </p>
            <div className="flex justify-center">
              <button
                className=" w-40 h-8 bg-[var(--primary-color)] font-semibold text-[var(--primary-background-color)] rounded-lg cursor-pointer max-md:w-36 max-md:h-8 max-md:text-sm"
                type="button"
              >
                CTA
              </button>
            </div>
          </section>
        </hgroup>
        {/* END */}

        {/* CTA / SKILL / DISPONIBILITÉ */}
        <hgroup className="border border-[var(--primary-color)] rounded-md shadow-lg shadow-slate-300 min-h-44 p-4 mb-4 flex flex-wrap gap-4 items-center">
          <button
            className=" w-56 h-11 bg-[var(--primary-color)] font-semibold text-[var(--primary-background-color)] rounded-lg cursor-pointer max-md:w-36 max-md:h-8 max-md:text-sm"
            type="button"
          >
            VOIR L'OFFRE
          </button>
          <p className=" w-14 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
            REACT
          </p>
          <p className="w-14 bg-[var(--primary-color)] text-[var(--primary-background-color)] text-center max-md:w-10 max-md:text-xs">
            JAVA
          </p>
          <p className=" w-28 bg-[var(--secondary-color)] text-[var(--primary-background-color)] text-center max-md:w-20 max-md:text-xs">
            BORDEAUX
          </p>
          <p className=" w-28 bg-[var(--primary-color)] text-[var(--primary-background-color)] text-center max-md:w-20 max-md:text-xs ">
            ALTERNANCE
          </p>
          <p className="text-[var(--validation-color-ok)] w-24 border border-[var(--green-color)]  text-center max-md:w-20 max-md:text-xs">
            DISPONIBLE
          </p>
          <p className="text-[var(--validation-color-in-progress)] w-24 text-center border border-[var(--validation-color-in-progress)] max-md:w-20 max-md:text-xs ">
            EN COURS
          </p>
          <p className="text-[var(--secondary-color)] w-24 text-center border border-[var(--secondary-color)] max-md:w-20 max-md:text-xs ">
            REFUSE
          </p>
          <button
            className=" w-80 h-20 bg-[var(--primary-color)] font-semibold text-[var(--primary-background-color)] rounded-lg cursor-pointer max-md:w-60 max-md:h-11 max-md:text-sm"
            type="button"
          >
            POSTULER
          </button>
          <button
            className=" w-80 h-20 bg-[var(--secondary-color)] font-semibold text-[var(--primary-background-color)] rounded-lg cursor-pointer max-md:w-60 max-md:h-11 max-md:text-sm"
            type="button"
          >
            POSTULER
          </button>
          <button
            className=" w-80 h-20 bg-[var(--primary-background-color)] font-semibold text-[var(--secondary-color)] border border-[var(--secondary-color)] rounded-lg cursor-pointer max-md:w-60 max-md:h-11 max-md:text-sm"
            type="button"
          >
            SUPPRIMER MON COMPTE
          </button>
          <button
            className=" flex justify-around items-center w-36 h-11 bg-[var(--primary-color)] font-medium text-[var(--primary-background-color)] rounded-lg cursor-pointer max-md:w-24 max-md:h-8 max-md:font-normal max-md:text-sm"
            type="button"
          >
            Supprimer <img src="./src/assets/images/delete.svg" alt="Delete" />
          </button>
          <button
            className=" flex justify-around items-center w-36 h-11 bg-[var(--primary-color)] font-medium text-[var(--primary-background-color)] rounded-lg cursor-pointer max-md:w-24 max-md:h-8 max-md:font-normal max-md:text-sm"
            type="button"
          >
            Modifier{" "}
            <img
              className=""
              src="./src/assets/images/modifier.svg"
              alt="Delete"
            />
          </button>
          <button
            className=" flex justify-around items-center w-36 h-11 bg-[var(--primary-color)] font-medium text-[var(--primary-background-color)] rounded-lg cursor-pointer max-md:w-24 max-md:h-8 max-md:font-normal max-md:text-sm"
            type="button"
          >
            Voir{" "}
            <img className="" src="./src/assets/images/open.svg" alt="Delete" />
          </button>
          <button
            className=" flex justify-around items-center w-36 h-11 bg-[var(--primary-color)] font-medium text-[var(--primary-background-color)] rounded-lg cursor-pointer  max-md:w-24 max-md:h-8 max-md:font-normal max-md:text-sm"
            type="button"
          >
            Téléphone{" "}
            <img
              className=""
              src="./src/assets/images/phone.svg"
              alt="Delete"
            />
          </button>
          <button
            className=" flex justify-around items-center w-36 h-11 bg-[var(--primary-color)] font-medium text-[var(--primary-background-color)] rounded-lg cursor-pointer  max-md:w-24 max-md:h-8 max-md:font-normal max-md:text-sm"
            type="button"
          >
            Email{" "}
            <img className="" src="./src/assets/images/mail.svg" alt="Delete" />
          </button>
          <button
            className=" flex justify-around items-center w-36 h-11 bg-[var(--primary-color)] font-medium text-[var(--primary-background-color)] rounded-lg cursor-pointer  max-md:w-24 max-md:h-8 max-md:font-normal max-md:text-sm"
            type="button"
          >
            CV{" "}
            <img className="" src="./src/assets/images/cv.svg" alt="Delete" />
          </button>
          <input
            type="checkbox"
            value=""
            className=" accent-[var(--primary-color)] scale-100 transition-all duration-500 ease-in-out hover:scale-110 checked:scale-100 w-4 h-4"
          />
          <input
            className="accent-[var(--primary-color)] scale-100 transition-all duration-500 ease-in-out hover:scale-110 checked:scale-100 w-5 h-5"
            type="checkbox"
          />          
          </hgroup>
        {/* END */}
      </main>
      {/* LOGO SVG */}
      <footer className=" bg-slate-400 flex flex-wrap gap-4 p-4">
        <img
          className=""
          src="./src/assets/images/linkedin.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/instagram.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/twitter.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/add.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/cv.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/delete.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/iconConnect.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/iconDisconnect.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/ICONLOC.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/ICONSEARCH.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/ICONSTACK.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/mail.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/menuBurger.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/modifier.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/notif.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/open.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/phone.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/signet.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/signetFull.svg"
          alt="Logo linkedin"
        />
        <img
          className=""
          src="./src/assets/images/upload.svg"
          alt="Logo linkedin"
        />
      </footer>
      {/* END */}
    </>
  );
}