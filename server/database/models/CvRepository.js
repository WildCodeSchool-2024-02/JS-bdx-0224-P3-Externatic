const AbstractRepository = require("./AbstractRepository");

class CvRepository extends AbstractRepository {
  constructor() {

    super({ table: "cv" });
  }

  async create(cv) {
    const [candidate] = await this.database.query(
      `SELECT id FROM candidate WHERE user_id = ?`,
      [cv.userId] 
    );
  
    const candidateId = candidate[0].id;
  
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, candidate_id) VALUES (?, ?)`,
      [cv.name, candidateId]
    );
  
    return result.insertId;
  }
}

module.exports = CvRepository;