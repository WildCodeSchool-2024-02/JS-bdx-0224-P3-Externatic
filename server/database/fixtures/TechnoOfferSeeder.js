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
    // Generate and insert fake data into the 'techno_offer' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake techno_offer data
      const fakeTechnoOffer = {
        techno_id: this.getRef(`techno_${i}`).insertId,
        offer_id: this.getRef(`offer_${i}`).insertId,
        refName: `techno_offer_${i}`, // Create a reference name for the techno_offer
      };

      // Insert the faketechno_offer data into the 'techno_offer' table
      this.insert(fakeTechnoOffer); // insert into techno_offer
    }
  }
}

// Export the techno_offerSeeder class
module.exports = TechnoOfferSeeder;
