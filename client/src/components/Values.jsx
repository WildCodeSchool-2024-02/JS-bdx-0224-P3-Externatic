import hand from "../assets/images/hand.svg";
import hourglass from "../assets/images/hourglass.svg";
import rocket from "../assets/images/rocket.svg";
import calendar from "../assets/images/calendar.svg";

export default function Values() {
  return (
    <section className="md:-mt-56 mt-20 flex flex-col relative gap-8 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-10 mx-4">
      <h2 className="text-[var(--primary-color)] text-3xl md:text-4xl mb-10 col-span-2 self-end text-center">
        La réussite de notre cabinet recrutement informatique ?
      </h2>
      <article className="p-4 m-4 md:ml-20 flex flex-col justify-around gap-10 bg-[var(--secondary-background-color)] border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow md:max-w-xl">
        <img src={hand} alt="" className="w-16 md:w-20 self-center" />
        <h3 className="text-center text-[var(--secondary-color)]">Notre proximité</h3>
        <p className="max-w-prose md:mx-10">
          L’expérience professionnelle est une chose. L’expérience de vie en est
          une autre. Alors nos consultants prennent le temps de faire
          connaissance avec chaque personne, pour comprendre le contexte, le
          parcours, les envies et les projets.
        </p>
      </article>
      <article className="p-4 m-4 md:mr-20 flex flex-col gap-10 justify-around  bg-[var(--secondary-background-color)] border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow md:max-w-xl">
        <img src={hourglass} alt="" className="w-16 md:w-20 self-center" />
        <h3 className="row-start-3 col-start-2 text-center text-[var(--secondary-color)]">
          Notre durabilité
        </h3>
        <p className="row-start-4 col-start-2 md:mx-10">
          Notre challenge est de trouver l’équipe qui fonctionnera ensemble de
          manière professionnelle et personnelle, pour aller jusqu’au bout d’un
          projet commun. Notre responsabilité vis-à-vis des impacts de nos
          décisions et nos actions sur le long-terme correspondent également à
          notre politique RSE.
        </p>
      </article>
      <article className="p-4 m-4 md:ml-20 flex flex-col justify-around  gap-10 bg-[var(--secondary-background-color)] border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow md:max-w-xl">
        <img src={rocket} alt="" className="w-16 md:w-20 self-center" />
        <h3 className="row-start-6 col-start-1 text-center text-[var(--secondary-color)]">
          Notre performance
        </h3>
        <p className="row-start-7 col-start-1 md:mx-10">
          Notre réseau est une force et nous y travaillons sans relâche. Notre
          expérience nous permet d’identifier les vrais besoins d’une entreprise
          et de ceux qui la rejoignent.
        </p>
      </article>
      <article className="p-4 m-4 md:mr-20 flex flex-col justify-around gap-10 bg-[var(--secondary-background-color)] border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow md:max-w-xl">
        <img src={calendar} alt="" className="w-16 md:w-20 self-center" />
        <h3 className="row-start-6 col-start-2 text-center text-[var(--secondary-color)]">Nos Événements</h3>
        <p className="row-start-7 col-start-2 md:mx-10">MEETUP AFUP Nantes</p>
        <p className="mt-12 row-start-7 col-start-2 sm:mt-6 md:mx-10">
          📆 Mardi 25 août à partir de 18h30
        </p>
        <p className="mt-24 row-start-7 col-start-2 sm:mt-12 md:mx-10">
          📍 UmanIT au 13 place Sophie Trébuchet 44000 Nantes
        </p>
      </article>
    </section>
  );
}
