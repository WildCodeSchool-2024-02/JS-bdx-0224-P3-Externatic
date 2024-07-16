const AbstractRepository = require("./AbstractRepository");

class CandidacyRepository extends AbstractRepository {
  constructor() {
    super({ table: "candidacy" });
  }

  async create(candidacy) {
    const [result] = await this.database.query(
      `insert into ${this.table} (date, status, offer_id, candidate_id) values(?, ?, ?, ?)`,
      [candidacy.CURDATE(), "en cours", candidacy.offerId, candidacy.candidateId]
    );

    return result.insertId;
  }
}

module.exports = CandidacyRepository;