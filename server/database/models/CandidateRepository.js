const AbstractRepository = require("./AbstractRepository");

class CandidateRepository extends AbstractRepository {
  constructor() {
    super({ table: "candidate" });
  }

  async update(data, id) {
    const { picture } = data;
    const query = `
      UPDATE ${this.table}
      SET picture = ?
      WHERE user_id = ?
    `;
    const [result] = await this.database.query(query, [picture, id]);
    return result;
  }
}

module.exports = CandidateRepository;
