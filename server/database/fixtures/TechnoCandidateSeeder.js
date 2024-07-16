const AbstractSeeder = require("./AbstractSeeder");
const CandidateSeeder = require("./CandidateSeeder");
const TechnoSeeder = require("./TechnoSeeder");

class TechnoCandidateSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "techno_candidate", truncate: true, dependencies: [CandidateSeeder, TechnoSeeder] });
  }

  // The run method - Populate the 'techno_candidate' table with fake data

  run() {
    // Generate and insert fake data into the 'techno_candidate' table
    for (let i = 0; i < 10; i += 1) {
      // Determine a random number of technologies to associate with the candidate
      const numTechnos = Math.floor(Math.random() * 5) + 1; // between 1 and 5 technos
      const selectedTechnos = new Set();

      // Randomly select unique technos
      while (selectedTechnos.size < numTechnos) {
        const technoId = Math.floor(Math.random() * 10); // assuming there are 10 technos
        selectedTechnos.add(technoId);
      }

      // Insert the relations into the techno_candidate table
      selectedTechnos.forEach((technoId) => {
        const fakeTechnoCandidate = {
          candidate_id: this.getRef(`candidate_${i}`).insertId,
          techno_id: this.getRef(`techno_${technoId}`).insertId,
          refName: `techno_candidate_${i}_${technoId}`, // Create a reference name for the techno_candidate
        };

        // Insert the fakeTechnoCandidate data into the 'techno_candidate' table
        this.insert(fakeTechnoCandidate); // insert into techno_candidate
      });
    }
  }
}

// Export the techno_candidateSeeder class
module.exports = TechnoCandidateSeeder;