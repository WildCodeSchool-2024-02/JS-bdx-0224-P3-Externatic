const AbstractRepository = require("./AbstractRepository");

class CandidacyRepository extends AbstractRepository {
  constructor() {
    super({ table: "candidacy" });
  }

  async create(candidacy) {
    const [candidate] = await this.database.query(
      `SELECT id FROM candidate WHERE user_id = ?`,
      [candidacy.authId] // Correction ici
    );

    const candidateId = candidate[0].id;
    const [result] = await this.database.query(
      `insert into ${this.table} (date, status, offer_id, candidate_id) values(?, ?, ?, ?)`,
      [candidacy.CURDATE(), "en cours", candidacy.offerId, candidateId]
    );

    return result.insertId;
  }
}

module.exports = CandidacyRepository;
