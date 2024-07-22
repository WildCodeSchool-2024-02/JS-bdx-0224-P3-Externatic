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
      `SELECT o.id AS offer_id, c.id AS consultant_id, u.id AS user_id
       FROM offer o
       JOIN consultant c ON o.consultant_id = c.id
       JOIN user u ON c.user_id = u.id
       WHERE o.id = ?`,
      [candidacy.offerId]
    );

    const offerId = offer[0].offer_id;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (date, status, offer_id, candidate_id) VALUES(CURDATE(), ?, ?, ?)`,
      ["en cours", offerId, candidateId]
    );

    return result.insertId;
  }
}

module.exports = CandidacyRepository;