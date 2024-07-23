const AbstractRepository = require("./AbstractRepository");

class CompanyRepository extends AbstractRepository {
  constructor() {
    super({ table: "company" });
  }

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT id, name
      FROM ${this.table}
    `);

    return rows;
  }
}

module.exports = CompanyRepository;
