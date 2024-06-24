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
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "name", company.name
        )
      ) AS companies,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "name", techno.name
        )
      ) AS technos,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "name", region.name
        )
      ) AS regions
    FROM ${this.table} AS offer
    LEFT JOIN company ON offer.company_id = company.id
    LEFT JOIN techno_offer ON offer.id = techno_offer.offer_id
    LEFT JOIN techno ON techno_offer.techno_id = techno.id
    LEFT JOIN consultant ON offer.consultant_id = consultant.id
    LEFT JOIN region ON consultant.id = region.consultant_id
    GROUP BY offer.id
  `);

    return rows;
  }
}

module.exports = OfferRepository;
