const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    super({ table: "favorite" });
  }

  async create(favorite) {
    const [candidateRows] = await this.database.query(
      `SELECT * FROM candidate WHERE id = ?`,
      [favorite.candidateId]
    );
    if (candidateRows.length === 0) {
      throw new Error(
        `Candidate with id ${favorite.candidateId} does not exist`
      );
    }
    const [offerRows] = await this.database.query(
      `SELECT * FROM offer WHERE id = ?`,
      [favorite.offerId]
    );
    if (offerRows.length === 0) {
      throw new Error(`Offer with id ${favorite.offerId} does not exist`);
    }
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

  async read(favorite) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table}
      INNER JOIN offer on favorite.offer_id = offer.id
      WHERE candidate_id = ?`,
      [favorite.candidateId]
    );
    return rows;
  }
}

module.exports = FavoriteRepository;