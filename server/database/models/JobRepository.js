const AbstractRepository = require("./AbstractRepository");

class JobRepository extends AbstractRepository {
  constructor() {
    super({ table: "job" });
  }

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT name
      FROM (
        SELECT DISTINCT name
        FROM ${this.table}
      ) AS distinct_jobs
      ORDER BY name ASC
      LIMIT 4;
    `);

    return rows;
  }
}

module.exports = JobRepository;
