const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    super({ table: "favorite" });
  }

  async create(favorite) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (candidate_id, offer_id) VALUES (?, ?)`,
      [favorite.candidate_id, favorite.offer_id]
    );
    return result.insertId;
  }
}

module.exports = FavoriteRepository;