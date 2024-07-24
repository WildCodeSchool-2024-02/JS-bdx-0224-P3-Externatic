import { Link } from "react-router-dom";

function CGU() {
  return (
    <main className=" mt-10 mx-auto w-4/5">
      <h1 className="my-8 text-[var(--secondary-color)]">
        Conditions Générales d'Utilisation
      </h1>
      <h2 className="my-8 text-[var(--primary-color)]">
        1. Bienvenue sur Externatic
      </h2>
      <p className="my-8">
        Les présentes Conditions Générales d'Utilisation (les "CGU") régissent
        votre utilisation du site et des services fournis par Externatic. En
        accédant au site et en utilisant ses services, vous acceptez sans
        réserve les présentes CGU.
      </p>
      <h2 className="my-8 text-[var(--primary-color)]">2. Services du site</h2>
      <p className="my-8">
        Le site fournit une plateforme en ligne permettant aux recruteurs de
        publier des offres d'emploi et aux candidats de rechercher des emplois
        dans le secteur des technologies de l'information (IT).
      </p>
      <h2 className="my-8 text-[var(--primary-color)]">
        3. Inscription et Compte Utilisateur
      </h2>
      <p className="my-8">
        3.1. Pour utiliser certains services du site, vous devez créer un compte
        utilisateur en fournissant des informations exactes et complètes.
      </p>
      <p className="my-8">
        3.2. Vous êtes responsable de la confidentialité de vos identifiants de
        connexion et de toutes les activités qui se déroulent sous votre compte.
      </p>
      <p className="my-8">
        3.3. Vous vous engagez à informer immédiatement Externatic de toute
        utilisation non autorisée de votre compte.
      </p>
      <h2 className="my-8 text-[var(--primary-color)]">
        4. Utilisation du site
      </h2>
      <p className="my-8">
        4.1. Vous acceptez d'utiliser le site uniquement à des fins légales et
        conformément aux présentes CGU.
      </p>
      <ul className="my-8 text-lg">
        4.2. Il est interdit de :
        <li className="ml-16">
          Publier des informations fausses ou trompeuses.
        </li>
        <li className="ml-16">
          Télécharger ou transmettre tout contenu illégal, nuisible, offensant
          ou diffamatoire.
        </li>
        <li className="ml-16">
          Violer les droits de propriété intellectuelle d'Externatic ou de
          tiers.
        </li>
        <li className="ml-16">
          Tenter d'obtenir un accès non autorisé aux systèmes informatiques
          d'Externatic.
        </li>
      </ul>
      <h2 className="my-8 text-[var(--primary-color)]">
        5. Contenu Utilisateur
      </h2>
      <p className="my-8">
        5.1. En publiant du contenu sur le site, vous accordez à Externatic une
        licence mondiale, non exclusive, gratuite et transférable d'utiliser,
        reproduire, distribuer et afficher ce contenu.
      </p>
      <p className="my-8">
        5.2. Vous déclarez et garantissez que vous possédez tous les droits sur
        le contenu que vous publiez et que ce contenu ne viole pas les droits de
        tiers.
      </p>
      <h2 className="my-8 text-[var(--primary-color)]">6. Responsabilité</h2>
      <p className="my-8">
        6.1. Externatic ne garantit pas que le site sera exempt d'erreurs ou
        accessible de manière ininterrompue.
      </p>
      <p className="my-8">
        6.2. Externatic n'est pas responsable des contenus publiés par les
        utilisateurs du site.
      </p>
      <p className="my-8">
        6.3. Externatic ne peut être tenue responsable des dommages directs ou
        indirects résultant de l'utilisation du site ou de l'incapacité à
        utiliser le site.
      </p>
      <h2 className="my-8 text-[var(--primary-color)]">
        7. Protection des Données
      </h2>
      <p className="my-8">
        7.1. La collecte et le traitement des données personnelles sont régis
        par notre{" "}
        <Link
          to="/protectionDataPolicy"
          className="text-[var(--primary-color)]"
        >
          Politique de Confidentialité
        </Link>
        .
      </p>
      <p className="my-8">
        7.2. En utilisant Externatic, vous consentez à la collecte et à
        l'utilisation de vos données personnelles conformément à cette
        politique.
      </p>
      <h2 className="my-8 text-[var(--primary-color)]">
        8. Modification des CGU
      </h2>
      <p>
        {" "}
        Externatic se réserve le droit de modifier les présentes CGU à tout
        moment. Les modifications entreront en vigueur dès leur publication sur
        le site. Il vous incombe de consulter régulièrement les CGU pour vous
        tenir informé des modifications éventuelles.
      </p>
      <h2 className="my-8 text-[var(--primary-color)]">9. Résiliation</h2>
      <p className="my-8">
        9.1. Externatic peut suspendre ou résilier votre accès au site en cas de
        violation des présentes CGU.
      </p>
      <p className="my-8">
        {" "}
        9.2. Vous pouvez fermer votre compte à tout moment en contactant le
        service client d'Externatic.
      </p>
      <h2 className="my-8 text-[var(--primary-color)]">
        {" "}
        10. Droit Applicable et Juridiction
      </h2>
      <p className="my-8">
        Les présentes CGU sont régies par le droit français. Tout litige relatif
        à l'interprétation ou à l'exécution des présentes CGU sera soumis à la
        compétence exclusive des tribunaux de Bordeaux.
      </p>
      <h2 className="my-8 text-[var(--primary-color)]"> 11. Contact</h2>
      <p className="my-8">
        Pour toute question concernant les présentes CGU, veuillez contacter la
        Société à l'adresse suivante : Service client, Externatic, 33000
        Bordeaux.
      </p>
    </main>
  );
}

export default CGU;
