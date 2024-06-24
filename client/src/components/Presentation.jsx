import PropTypes from "prop-types";

import Button from "./atomic/buttons/Button";

function Presentation({handleChange}) {
  return (
    <main className="flex flex-col items-center">
      <h1 className="mt-6 text-center text-[var(--secondary-color)] md:mt-16 md:text-6xl">
        Externatic
      </h1>
      <h2 className="flex-none my-10 mx-4 text-[var(--primary-color)] md:self-start md:mr-[20%] md:mx-6 md:mt-20">
        Ton prochain job à portée de clicks
      </h2>
      <p className="mx-4 mb-10 md:ml-6  md:mb-20 md:mr-[20%] md:mx-6 md:animate-fade-left md:animate-once md:animate-duration-700 md:animate-delay-300">
        Externatic est un cabinet dédié au recrutement de profils d’experts,
        ingénieurs et managers dans le domaine de l’informatique. Les
        entreprises nous font confiance et ça booste votre candidature. Faire
        appel à un cabinet fait passer votre CV sur le haut de la pile! Faire
        appel à nous, c’est donc vous ouvrir à un réseau d’entreprises qui ne
        publient pas forcément leurs offres. Plus de 400 entreprises, de la
        startup à la DSI en passant par les éditeurs de logiciels, agence web,
        PME…
      </p>
      <h2 className="my-10 mx-4 text-[var(--primary-color)] md:ml-[20%] md:mr-20">
        Plus qu’un cabinet de recrutement informatique
      </h2>
      <p className="mx-4 mb-10 md:mb-20 md:ml-[20%] md:text-left md:mx-6 md:animate-fade-right md:animate-once md:animate-duration-700 md:animate-delay-300">
        Externatic, c’est avant tout une équipe d’experts IT, tous animés par la
        même passion des relations humaines. L’intelligence émotionnelle et
        l’éducation cognitive ne peuvent être remplacées par des algorithmes.
        Notre cabinet de recrutement s’appuie sur des méthodes authentiques, où
        l’humain est tout simplement indispensable.
      </p>
      <Button type="button" apply="medium" name="S'inscrire" className="" onClick={handleChange} />
    </main>
  );
};

Presentation.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Presentation;
