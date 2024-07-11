const AbstractSeeder = require("./AbstractSeeder");

class CompanySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "company", truncate: true });
  }

  // The run method - Populate the 'company' table with fake data

  run() {
    const data = [
      {
        "name": "Preflix",
        "banner": "/companyBanner/deactivated-account-lzh3hPtJz9c-unsplash.jpg",
        "logo": "/companyLogo/Externatic.svg",
        "description": "Une entreprise innovante dans le domaine de la technologie, en constante recherche de solutions novatrices pour répondre aux besoins du marché.",
        "refName": "company_0"
      },
      {
        "name": "Wildy Gamy",
        "banner": "/companyBanner/jorge-ramirez-nr3AmB4_B8g-unsplash.jpg",
        "logo": "/companyLogo/logo-wildy-gamy-wg.svg",
        "description": "Une entreprise axée sur l'innovation et la créativité, encourageant la prise d'initiatives et la recherche de nouvelles idées.",
        "refName": "company_1"
      },
      {
        "name": "Sweet Stream",
        "banner": "/companyBanner/markus-spiske-cvBBO4PzWPg-unsplash.jpg",
        "logo": "/companyLogo/Logo SweatStream.png",
        "description": "Une start-up dynamique axée sur le développement durable, engagée dans la protection de l'environnement et la responsabilité sociale.",
        "refName": "company_2"
      },
      {
        "name": "Hyper Music",
        "banner": "/companyBanner/markus-spiske-iar-afB0QQw-unsplash.jpg",
        "logo": "/companyLogo/Externatic.svg",
        "description": "Pionnier dans la recherche en intelligence artificielle, explorant les frontières de la technologie pour créer des solutions innovantes.",
        "refName": "company_3"
      },
      {
        "name": "Cocktails Club",
        "banner": "/companyBanner/roman-synkevych-vXInUOv1n84-unsplash.jpg",
        "logo": "/companyLogo/Externatic.svg",
        "description": "Une entreprise familiale avec une longue histoire d'excellence, basée sur des valeurs de qualité, de confiance et d'engagement.",
        "refName": "company_4"
      },
      {
        "name": "Wild Eat",
        "banner": "/companyBanner/martin-shreder-5Xwaj9gaR0g-unsplash.jpg",
        "logo": "/companyLogo/Externatic.svg",
        "description": "Spécialisée dans les services financiers et la gestion de patrimoine, offrant des conseils personnalisés et une expertise reconnue.",
        "refName": "company_5"
      },
      {
        "name": "Wine Code School",
        "banner": "/companyBanner/cartist-3iUE4iEIdJw-unsplash.jpg",
        "logo": "/companyLogo/Externatic.svg",
        "description": "Spécialiste de la transformation digitale pour les entreprises, accompagnant les sociétés dans leur transition vers le numérique avec des solutions innovantes.",
        "refName": "company_6"
      },
      {
        "name": "Pix Hunt",
        "banner": "/companyBanner/altumcode-oZ61KFUQsus-unsplash.jpg",
        "logo": "/companyLogo/Externatic.svg",
        "description": "Leader mondial dans la production de logiciels de gestion, offrant des solutions performantes et adaptées aux besoins des entreprises.",
        "refName": "company_7"
      },
      {
        "name": "Croissant Clicker",
        "banner": "/companyBanner/joshua-sortino-LqKhnDzSF-8-unsplash.jpg",
        "logo": "/companyLogo/logo.svg",
        "description": "Fournisseur de services informatiques de pointe pour les entreprises, offrant des solutions sur mesure et un support technique de qualité.",
        "refName": "company_8"
      },
      {
        "name": "Nebula",
        "banner": "/companyBanner/marius-niveri-rfg4l6_lu3c-unsplash.jpg",
        "logo": "/companyLogo/logoNebulaNoir.svg",
        "description": "Une équipe passionnée par la création de solutions numériques, mettant en avant la créativité et l'expertise technique.",
        "refName": "company_9"
      },
      {
        "name": "Wild Quiz",
        "banner": "https://picsum.photos/200/300",
        "logo": "/companyLogo/logoNebulaNoir.svg",
        "description": "Une équipe passionnée par la création de solutions numériques, mettant en avant la créativité et l'expertise technique.",
        "refName": "company_10"
      },
      {
        "name": "Thrombinoscope",
        "banner": "https://picsum.photos/200/300",
        "logo": "logoNebulaNoir.svg",
        "description": "Une équipe passionnée par la création de solutions numériques, mettant en avant la créativité et l'expertise technique.",
        "refName": "company_11"
      },
    ]
    data.forEach((company) => {
      this.insert(company) 
    })
  }
}

module.exports = CompanySeeder;
