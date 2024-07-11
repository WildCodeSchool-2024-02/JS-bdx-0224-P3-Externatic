const AbstractSeeder = require("./AbstractSeeder");
const CompanySeeder = require("./CompanySeeder");
const ConsultantSeeder = require("./ConsultantSeeder");
const JobSeeder = require("./JobSeeder");

const data = [
  {
    "title": "Développeur web",
    "details": "Nous recherchons un développeur passionné pour rejoindre notre équipe dynamique. Vous serez responsable de la conception et du développement de nouvelles fonctionnalités pour nos produits innovants. Vous travaillerez en étroite collaboration avec notre équipe de conception pour créer des interfaces utilisateur intuitives et réactives. De plus, vous participerez à la maintenance et à l'optimisation des applications existantes pour assurer des performances élevées et une excellente expérience utilisateur.",
    "city": "Paris",
    "type": "CDI",
    "advantages": "En rejoignant notre entreprise, vous bénéficierez d'un environnement de travail stimulant, de formations régulières, de perspectives d'évolution, d'une équipe soudée et de nombreux avantages sociaux.",
    "salary": 45000
  },
  {
    "title": "Développeur fullstack",
    "details": "Rejoignez notre entreprise en pleine croissance et participez à des projets stimulants. Vous aurez l'opportunité de travailler avec une équipe talentueuse et de contribuer à notre succès. Vous serez impliqué dans toutes les phases du développement, de la conception à la mise en production, et vous travaillerez sur une variété de technologies front-end et back-end. Vous devrez également assurer la qualité du code en effectuant des revues de code régulières et en mettant en place des tests automatisés.",
    "city": "Marseille",
    "type": "CDD",
    "advantages": "Nous offrons des conditions de travail flexibles, un cadre propice à l'épanouissement professionnel, des projets variés et une ambiance conviviale. Rejoignez-nous pour vivre une expérience enrichissante.",
    "salary": 52000
  },
  {
    "title": "Développeur front-end",
    "details": "Vous êtes passionné par le développement web et vous souhaitez relever de nouveaux défis ? Rejoignez-nous et participez à la création de solutions innovantes pour nos clients. Vous serez responsable de la mise en œuvre de designs réactifs et interactifs en utilisant des technologies modernes telles que React, Vue.js ou Angular. Vous collaborerez étroitement avec nos équipes de conception et de back-end pour assurer une intégration transparente et une expérience utilisateur fluide.",
    "city": "Lyon",
    "type": "Alternance",
    "advantages": "Travaillez dans un environnement dynamique et innovant, bénéficiez d'avantages compétitifs, d'un management à l'écoute et de possibilités d'évolution. Rejoignez-nous pour faire partie d'une équipe passionnée.",
    "salary": 35000
  },
  {
    "title": "Développeur back-end",
    "details": "Notre entreprise offre un environnement de travail convivial et des opportunités d'évolution. Rejoignez-nous pour mettre en pratique vos compétences et contribuer à notre développement. Vous serez en charge de la conception et de la mise en œuvre de services back-end robustes et évolutifs, en utilisant des technologies comme Node.js, Django ou Ruby on Rails. Vous optimiserez les performances des bases de données et assurerez la sécurité des applications web.",
    "city": "Toulouse",
    "type": "CDI",
    "advantages": "Nous valorisons le bien-être de nos collaborateurs, offrons des opportunités de formation continue, des challenges stimulants et une culture d'entreprise basée sur la confiance et la collaboration.",
    "salary": 48000
  },
  {
    "title": "Développeur web",
    "details": "Nous recherchons un développeur passionné pour rejoindre notre équipe dynamique. Vous serez responsable de la conception et du développement de nouvelles fonctionnalités pour nos produits innovants. Vous devrez également collaborer avec les équipes de conception pour améliorer l'expérience utilisateur et intégrer des technologies de pointe dans nos produits. Votre rôle inclura également la participation à la veille technologique pour rester à jour avec les dernières tendances et innovations du secteur.",
    "city": "Nice",
    "type": "CDD",
    "advantages": "En rejoignant notre entreprise, vous bénéficierez d'un environnement de travail stimulant, de formations régulières, de perspectives d'évolution, d'une équipe soudée et de nombreux avantages sociaux.",
    "salary": 46000
  },
  {
    "title": "Développeur fullstack",
    "details": "Rejoignez notre entreprise en pleine croissance et participez à des projets stimulants. Vous aurez l'opportunité de travailler avec une équipe talentueuse et de contribuer à notre succès. En tant que développeur fullstack, vous interviendrez sur tous les aspects des projets, du front-end au back-end, et vous devrez assurer la performance, la sécurité et la scalabilité des applications. Vous serez également en charge de la rédaction de documentation technique et de la formation des nouveaux membres de l'équipe.",
    "city": "Nantes",
    "type": "Alternance",
    "advantages": "Nous offrons des conditions de travail flexibles, un cadre propice à l'épanouissement professionnel, des projets variés et une ambiance conviviale. Rejoignez-nous pour vivre une expérience enrichissante.",
    "salary": 39000
  },
  {
    "title": "Développeur front-end",
    "details": "Vous êtes passionné par le développement web et vous souhaitez relever de nouveaux défis ? Rejoignez-nous et participez à la création de solutions innovantes pour nos clients. Vous serez responsable de l'implémentation des designs fournis par l'équipe de conception, tout en assurant leur compatibilité avec divers navigateurs et appareils. Vous devrez également optimiser les performances front-end pour garantir des temps de chargement rapides et une expérience utilisateur fluide.",
    "city": "Strasbourg",
    "type": "CDI",
    "advantages": "Travaillez dans un environnement dynamique et innovant, bénéficiez d'avantages compétitifs, d'un management à l'écoute et de possibilités d'évolution. Rejoignez-nous pour faire partie d'une équipe passionnée.",
    "salary": 42000
  },
  {
    "title": "Développeur back-end",
    "details": "Notre entreprise offre un environnement de travail convivial et des opportunités d'évolution. Rejoignez-nous pour mettre en pratique vos compétences et contribuer à notre développement. Vous travaillerez sur la conception de l'architecture des systèmes back-end, l'intégration des API et la gestion des bases de données. Vous serez également responsable de l'optimisation des performances et de la mise en place de tests pour garantir la qualité du code.",
    "city": "Montpellier",
    "type": "CDD",
    "advantages": "Nous valorisons le bien-être de nos collaborateurs, offrons des opportunités de formation continue, des challenges stimulants et une culture d'entreprise basée sur la confiance et la collaboration.",
    "salary": 50000
  },
  {
    "title": "Développeur web",
    "details": "Nous recherchons un développeur passionné pour rejoindre notre équipe dynamique. Vous serez responsable de la conception et du développement de nouvelles fonctionnalités pour nos produits innovants. Vous devrez également collaborer avec les équipes de conception pour améliorer l'expérience utilisateur et intégrer des technologies de pointe dans nos produits. Votre rôle inclura également la participation à la veille technologique pour rester à jour avec les dernières tendances et innovations du secteur.",
    "city": "Bordeaux",
    "type": "CDI",
    "advantages": "En rejoignant notre entreprise, vous bénéficierez d'un environnement de travail stimulant, de formations régulières, de perspectives d'évolution, d'une équipe soudée et de nombreux avantages sociaux.",
    "salary": 47000
  },
  {
    "title": "Développeur fullstack",
    "details": "Rejoignez notre entreprise en pleine croissance et participez à des projets stimulants. Vous aurez l'opportunité de travailler avec une équipe talentueuse et de contribuer à notre succès. En tant que développeur fullstack, vous interviendrez sur tous les aspects des projets, du front-end au back-end, et vous devrez assurer la performance, la sécurité et la scalabilité des applications. Vous serez également en charge de la rédaction de documentation technique et de la formation des nouveaux membres de l'équipe.",
    "city": "Lille",
    "type": "Alternance",
    "advantages": "Nous offrons des conditions de travail flexibles, un cadre propice à l'épanouissement professionnel, des projets variés et une ambiance conviviale. Rejoignez-nous pour vivre une expérience enrichissante.",
    "salary": 41000
  }
];

class OfferSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "offer",
      truncate: true,
      dependencies: [ConsultantSeeder, JobSeeder, CompanySeeder],
    });
  }

  run() {
    data.forEach((offer, index) => {
      const consultantRef = `consultant_${index}`;
      const jobRef = `job_${index}`;
      const companyRef = `company_${index}`;
      
      const consultantId = this.getRef(consultantRef).insertId;
      const jobId = this.getRef(jobRef).insertId;
      const companyId = this.getRef(companyRef).insertId;

      const newOffer = {
        ...offer,
        consultant_id: consultantId,
        job_id: jobId,
        company_id: companyId,
        refName: `offer_${index}`
      };

      this.insert(newOffer);
    });
  }
}

module.exports = OfferSeeder;
