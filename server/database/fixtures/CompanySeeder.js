const AbstractSeeder = require("./AbstractSeeder");

class CompanySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "company", truncate: true });
  }

  // The run method - Populate the 'company' table with fake data

  run() {
    // Generate and insert fake data into the 'company' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake company data
      const fakeCompany = {
        name: this.faker.company.name(),
        banner: this.faker.image.urlPicsumPhotos(),
        logo: this.faker.image.urlPicsumPhotos(), // Generate a fake email using faker library
        description: this.faker.lorem.sentence(),
        refName: `company_${i}`, // Create a reference name for the company
      };

      // Insert the fakecompany data into the 'company' table
      this.insert(fakeCompany); // insert into company
    }
  }
}

// Export the companySeeder class
module.exports = CompanySeeder;
