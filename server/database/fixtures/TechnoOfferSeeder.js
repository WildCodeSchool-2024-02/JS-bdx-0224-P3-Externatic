const AbstractSeeder = require("./AbstractSeeder");
const TechnoSeeder = require("./TechnoSeeder");
const OfferSeeder = require("./OfferSeeder");


class TechnoOfferSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "techno_offer", truncate: true, dependencies: [ TechnoSeeder, OfferSeeder ] });
  }

  // The run method - Populate the 'techno_offer' table with fake data

  run() {
    // Assume there are 10 offers and 14 technos from the seeders
    const NUMBER_OF_OFFERS = 10;
    const NUMBER_OF_TECHNOS = 14;

    for (let i = 0; i < NUMBER_OF_OFFERS; i += 1) {
      // Determine a random number of technologies to associate with the offer
      const numTechnos = Math.floor(Math.random() * 3) + 1; // between 1 and 5 technos
      const selectedTechnos = new Set();

      // Randomly select unique technos
      while (selectedTechnos.size < numTechnos) {
        const technoId = Math.floor(Math.random() * NUMBER_OF_TECHNOS);
        selectedTechnos.add(technoId);
      }

      // Insert the relations into the offer_techno table
      selectedTechnos.forEach((technoId) => {
        const offerTechno = {
          offer_id: this.getRef(`offer_${i}`).insertId,
          techno_id: this.getRef(`techno_${technoId}`).insertId,
        };
        this.insert(offerTechno);
      });
    }
  }
}

// Export the techno_offerSeeder class
module.exports = TechnoOfferSeeder;
