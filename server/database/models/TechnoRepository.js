const AbstractRepository = require("./AbstractRepository");

class TechnoRepository extends AbstractRepository {
  constructor() {
    super({ table: "techno" });
  }

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT id, name
      FROM ${this.table}
    `);

    return rows;
  }
}

module.exports = TechnoRepository;
