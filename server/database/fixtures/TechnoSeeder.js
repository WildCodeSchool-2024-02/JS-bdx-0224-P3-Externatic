const AbstractSeeder = require("./AbstractSeeder");

class TechnoSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "techno", truncate: true });
  }

  // The run method - Populate the 'techno' table with fake data

  run() {
    const technos = [
      "Javascript",
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "Python",
      "Figma",
      "Java",
      "Angular",
      "Svelte",
      "MySQL",
      "NoSQL",
      "Spring",
      "Express",
    ];
    technos.forEach((techno, id) => {
      const fakeTechno = {
        name: techno,
        refName: `techno_${id}`
      }
      this.insert(fakeTechno); // insert into techno
    });
  }
}

// Export the TechnoSeeder class
module.exports = TechnoSeeder;
