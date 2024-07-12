const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    super({ table: "favorite" });
  }

  async create(favorite) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (candidate_id, offer_id) VALUES (?, ?)`,
      [favorite.candidateId, favorite.offerId]
    );
    return result.insertId;
  }

  async delete(favorite) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE candidate_id = ? AND offer_id = ?`,
      [favorite.candidateId, favorite.offerId]
    );
    return result.affectedRows;
  }
  }



module.exports = FavoriteRepository;