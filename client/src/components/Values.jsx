import hand from "../assets/images/hand.svg";
import hourglass from "../assets/images/hourglass.svg";
import rocket from "../assets/images/rocket.svg";
import calendar from "../assets/images/calendar.svg";

export default function Values() {
  return (
    <article className=" p-4 m-4 max-w-screen-md mt-24 gap-4 gap-x-8 bg-[var(--secondary-background-color)] border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow grid grid-cols-2 md:mx-auto md:max-w-7xl">
      <h2 className=" text-[var(--primary-color)] col-span-2 text-center mb-10">
        La réussite de notre cabinet recrutement informatique ?
      </h2>
      <img
        src={hand}
        alt=""
        className=" w-13 max-md:w-13  row-start-2 col-start-1 justify-self-center my-4 "
      />
      <h3 className=" text-xl font-semibold row-start-3 col-start-1 text-center">
        Notre proximité
      </h3>
      <p className=" text-sm md:text-base row-start-4 col-start-1 md:mx-10">
        L’expérience professionnelle est une chose. L’expérience de vie en est
        une autre. Alors nos consultants prennent le temps de faire connaissance
        avec chaque personne, pour comprendre le contexte, le parcours, les
        envies et les projets.
      </p>
      <img
        src={hourglass}
        alt=""
        className=" w-13 max-md:w-13 row-start-2 col-start-2 justify-self-center my-4"
      />
      <h3 className=" text-xl font-semibold row-start-3 col-start-2 text-center">
        Notre durabilité
      </h3>
      <p className=" text-sm md:text-base row-start-4 col-start-2 md:mx-10">
        Notre challenge est de trouver l’équipe qui fonctionnera ensemble de
        manière professionnelle et personnelle, pour aller jusqu’au bout d’un
        projet commun. Notre responsabilité vis-à-vis des impacts de nos
        décisions et nos actions sur le long-terme correspondent également à
        notre politique RSE.
      </p>
      <img
        src={rocket}
        alt=""
        className=" w-13 max-md:w-13 row-start-5 col-start-1 justify-self-center my-4"
      />
      <h3 className=" text-xl font-semibold row-start-6 col-start-1 text-center">
        Notre performance
      </h3>
      <p className=" text-sm md:text-base row-start-7 col-start-1 md:mx-10">
        Notre réseau est une force et nous y travaillons sans relâche. Notre
        expérience nous permet d’identifier les vrais besoins d’une entreprise
        et de ceux qui la rejoignent.
      </p>
      <img
        src={calendar}
        alt=""
        className=" w-13 max-md:w-13 row-start-5 col-start-2 justify-self-center my-4"
      />
      <h3 className=" text-xl font-semibold row-start-6 col-start-2 text-center">
        Nos Événements
      </h3>
      <p className=" text-sm md:text-base row-start-7 col-start-2 md:mx-10">
        MEETUP AFUP Nantes
      </p>
      <p className="text-sm md:text-base mt-12 row-start-7 col-start-2 sm:mt-6 md:mx-10">
        📆 Mardi 25 juin à partir de 18h30
      </p>
      <p className="text-sm md:text-base mt-24 row-start-7 col-start-2 sm:mt-12 md:mx-10">
        📍 UmanIT au 13 place Sophie Trébuchet 44000 Nantesé
      </p>
    </article>
  );
}
