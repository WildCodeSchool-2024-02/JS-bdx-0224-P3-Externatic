const AbstractRepository = require("./AbstractRepository");

class CandidacyRepository extends AbstractRepository {
  constructor() {
    super({ table: "candidacy" });
  }

  async create(candidacy) {
    const [candidate] = await this.database.query(
      `SELECT id FROM candidate WHERE user_id = ?`,
      [candidacy.authId] 
    );

    const candidateId = candidate[0].id;

    const [offer] = await this.database.query(
      `SELECT consultant_id FROM offer WHERE id = ?`,
      [candidacy.offerId]
    );

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (date, status, offer_id, candidate_id) VALUES(CURDATE(), ?, ?, ?)`,
      ["en cours", offer, candidateId]
    );

    return result.insertId;
  }
}

module.exports = CandidacyRepository;