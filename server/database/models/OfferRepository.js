const AbstractRepository = require("./AbstractRepository");

class OfferRepository extends AbstractRepository {
  constructor() {
    super({ table: "offer" });
  }

  async create(offer) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title, details, advantages, salary, consultant_id, job_id, id) values(?, ?, ?, ?, ?, ?, ?)`,
      [
        offer.title,
        offer.details,
        offer.advantages,
        offer.salary,
        offer.consultant_id,
        offer.job_id,
        offer.id,
      ]
    );

    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT
  offer.title,
  offer.details,
  offer.city,
  (
    SELECT JSON_ARRAYAGG(JSON_OBJECT("name", company.name))
    FROM company
    WHERE offer.company_id = company.id
  ) AS companies,
  (
    SELECT JSON_ARRAYAGG(JSON_OBJECT("name", techno.name))
    FROM techno_offer
    INNER JOIN techno ON techno_offer.techno_id = techno.id
    WHERE techno_offer.offer_id = offer.id
  ) AS technos
FROM ${this.table} AS offer
  `);

    return rows;
  }
}

module.exports = OfferRepository;
