import { Link } from "react-router-dom";

function LegalMentions() {
  return (
    <main className=" mt-10 mx-auto w-4/5">
      <h1 className="my-8 text-[var(--secondary-color)]">Mentions Légales</h1>
      <h2 className="my-8 text-[var(--primary-color)]">1. Éditeur du site</h2>
      <p className="my-8">
        Le site Externatic est édité par Externatic, une société SARL au capital
        de 10000000 euros, immatriculée au Registre du Commerce et des Sociétés
        de Bordeaux sous le numéro 123456789.
      </p>

      <p className="my-8">Siège social : 33000 Bordeaux</p>
      <p className="my-8">
        Numéro de téléphone :{" "}
        <a
          className="text-[var(--primary-color)] underline hover:text-[var(--secondary-color)]"
          href="tel:0504030201"
        >
          05.04.03.02.01
        </a>
      </p>
      <p className="my-8">
        Adresse email :{" "}
        <a
          className="text-[var(--primary-color)] underline hover:text-[var(--secondary-color)]"
          href="mailto:externatic@wcs.com"
        >
          externatic@wcs.com
        </a>
      </p>
      <h2 className="my-8 text-[var(--primary-color)]">
        2. Directeur de la Publication
      </h2>
      <p className="my-8">
        Le directeur de la publication est Monsieur Le Directeur, en qualité de
        Directeur Général de Externatic.
      </p>

      <h2 className="my-8 text-[var(--primary-color)]">
        3. Hébergement du site
      </h2>
      <p className="my-8">
        Le site est hébergé par WCS, dont le siège social est situé à Bordeaux.
      </p>

      <p className="my-8">
        Numéro de téléphone :{" "}
        <a
          className="text-[var(--primary-color)] underline hover:text-[var(--secondary-color)]"
          href="tel:0504030200"
        >
          05.04.03.02.00
        </a>
      </p>
      <p className="my-8">
        Adresse email :{" "}
        <a
          className="text-[var(--primary-color)] underline hover:text-[var(--secondary-color)]"
          href="mailto:externatic@wcs.com"
        >
          wcs@wcs.com
        </a>
      </p>
      <h2 className="my-8 text-[var(--primary-color)]">
        4. Propriété Intellectuelle
      </h2>
      <p className="my-8">
        Tous les éléments du site (textes, images, graphismes, logo, icônes,
        sons, logiciels, etc.) sont protégés par le droit d'auteur, le droit des
        marques et tous autres droits de propriété intellectuelle. Ces éléments
        sont la propriété exclusive de Externatic, sauf mentions contraires.
      </p>

      <p className="my-8">
        Toute reproduction, représentation, modification, publication,
        adaptation de tout ou partie des éléments du site, quel que soit le
        moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
        préalable de Externatic.
      </p>

      <h2 className="my-8 text-[var(--primary-color)]">
        5. Données Personnelles
      </h2>
      <p className="my-8">
        La gestion des données personnelles des utilisateurs du site est
        effectuée conformément à notre{" "}
        <Link
          to="/protectionDataPolicy"
          className="text-[var(--primary-color)]"
        >
          Politique de Confidentialité
        </Link>
        . Conformément à la loi "Informatique et Libertés" et au Règlement
        Général sur la Protection des Données (RGPD), vous disposez d’un droit
        d’accès, de rectification, d’effacement, de limitation du traitement, de
        portabilité et d’opposition sur vos données personnelles. Pour exercer
        ces droits, veuillez nous contacter à l'adresse suivante : Service
        client, Externatic, 33000 Bordeaux.
      </p>

      <h2 className="my-8 text-[var(--primary-color)]">6. Liens Hypertextes</h2>
      <p className="my-8">
        Le site peut contenir des liens hypertextes vers d'autres sites web.
        Externatic n'exerce aucun contrôle sur ces sites et décline toute
        responsabilité quant à leur contenu. L'insertion de ces liens ne
        signifie pas que Externatic approuve les éléments contenus sur ces
        sites.
      </p>

      <h2 className="my-8 text-[var(--primary-color)]">7. Responsabilité</h2>
      <p className="my-8">
        Externatic met tout en œuvre pour offrir aux utilisateurs des
        informations et/ou des outils disponibles et vérifiés. Toutefois,
        Externatic ne saurait être tenu pour responsable des erreurs, d’une
        absence de disponibilité des informations et/ou de la présence de virus
        sur le site.
      </p>

      <h2 className="my-8 text-[var(--primary-color)]">
        8. Droit Applicable et Juridiction Compétente
      </h2>
      <p className="my-8">
        Les présentes mentions légales sont régies par le droit français. En cas
        de litige et à défaut de résolution amiable, le litige sera porté devant
        les tribunaux de Bordeaux.
      </p>

      <h2 className="my-8 text-[var(--primary-color)]">9. Contact</h2>
      <p className="my-8">
        Pour toute question ou demande d'information concernant le site, vous
        pouvez nous contacter à l'adresse suivante : Service client, Externatic,
        33000 Bordeaux.
      </p>

      <h2 className="my-8 text-[var(--primary-color)] inline-block">
        Dernière mise à jour
      </h2>
      <p className="inline-block text-2xl font-medium">: le 01/07/2024.</p>
    </main>
  );
}

export default LegalMentions;
