const AbstractSeeder = require("./AbstractSeeder");

class TechnoSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "techno", truncate: true });
  }

  // The run method - Populate the 'techno' table with fake data

  run() {
    // Generate and insert fake data into the 'techno' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake techno data
      const fakeTechno = {
        name: this.faker.helpers.arrayElement(["Javascript", "HTML", "CSS", "React.js", "Node.js", "Python", "Figma", "Java", "Angular", "Svelte", "MySQL", "NoSQL", "Spring", "Express"]),
        refName: `techno_${i}`, // Create a reference name for the techno
      };

      // Insert the faketechno data into the 'techno' table
      this.insert(fakeTechno); // insert into techno
    }
  }
}

// Export the TechnoSeeder class
module.exports = TechnoSeeder;
