export default function Values() {
  return (
    <section className=" p-4 m-4 mt-24 gap-8 bg-[var(--secondary-background-color)] border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow grid grid-cols-2">
      <h2 className="  col-span-2">
        La réussite de notre{" "}
        <span className=" font-semibold text-[var(--primary-color)] grid-rows-1">
          cabinet
        </span>{" "}
        de{" "}
        <span className=" font-semibold text-[var(--primary-color)] grid-rows-1">
          recrutement informatique
        </span>{" "}
        ?
      </h2>
      <img
        src="./src/assets/images/hand.svg"
        alt=""
        className=" w-13 max-md:w-13  row-start-2 col-start-1 sm:justify-self-center my-4 "
      />
      <h3 className=" text-xl text-[var(--primary-color)] row-start-3 col-start-1">
        Notre proximité
      </h3>
      <p className=" text-sm  row-start-4 col-start-1">
        L’expérience professionnelle est une chose. L’expérience de vie en est
        une autre. Alors nos consultants prennent le temps de faire connaissance
        avec chaque personne, pour comprendre le contexte, le parcours, les
        envies et les projets.
      </p>
      <img
        src="./src/assets/images/hourglass.svg"
        alt=""
        className=" w-13 max-md:w-13  row-start-2 col-start-2 sm:justify-self-center my-4"
      />
      <h3 className=" text-xl text-[var(--primary-color)] row-start-3 col-start-2">
        Notre durabilité
      </h3>
      <p className=" text-sm  row-start-4 col-start-2">
        Notre challenge est de trouver l’équipe qui fonctionnera ensemble de
        manière professionnelle et personnelle, pour aller jusqu’au bout d’un
        projet commun. Notre responsabilité vis-à-vis des impacts de nos
        décisions et nos actions sur le long-terme correspondent également à
        notre politique RSE.
      </p>
      <img
        src="./src/assets/images/rocket.svg"
        alt=""
        className=" w-13 max-md:w-13  row-start-5 col-start-1 sm:justify-self-center my-4"
      />
      <h3 className=" text-xl text-[var(--primary-color)] row-start-6 col-start-1">
        Notre performance
      </h3>
      <p className=" text-sm  row-start-7 col-start-1">
        Notre réseau est une force et nous y travaillons sans relâche. Notre
        expérience nous permet d’identifier les vrais besoins d’une entreprise
        et de ceux qui la rejoignent.
      </p>
      <img
        src="./src/assets/images/calendar.svg"
        alt=""
        className=" w-13 max-md:w-13  row-start-5 col-start-2 sm:justify-self-center my-4"
      />
      <h3 className=" text-xl text-[var(--primary-color)] row-start-6 col-start-2">
        Nos Événements
      </h3>
      <p className=" text-sm row-start-7 col-start-2">MEETUP AFUP Nantes</p>
      <p className="text-sm mt-12 row-start-7 col-start-2 sm:mt-6">
        📆 Mardi 25 juin à partir de 18h30
      </p>
      <p className="text-sm mt-24 row-start-7 col-start-2 sm:mt-12">
        📍 UmanIT au 13 place Sophie Trébuchet 44000 Nantesé
      </p>
    </section>
  );
}
