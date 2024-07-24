const AbstractRepository = require("./AbstractRepository");

class RegionRepository extends AbstractRepository {
  constructor() {
    super({ table: "region" });
  }

  async update(data, id) {
    const { name } = data;
    const query = `
      UPDATE ${this.table}
      SET name = ?
      WHERE candidate_id = ?
    `;
    const [result] = await this.database.query(query, [name, id]);
    return result;
  }
}

module.exports = RegionRepository;
