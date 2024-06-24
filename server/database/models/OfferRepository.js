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

  // async read(id) {
  //   const [rows] = await this.database.query(
  //     `select * from ${this.table} where id = ?`,
  //     [id]
  //   );

  //   return rows[0];
  // }

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT
      offer.*,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "id", company.id,
          "name", company.name,
          "banner", company.banner,
          "logo", company.logo,
          "description", company.description
        )
      ) AS companies,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "id", techno.id,
          "name", techno.name
        )
      ) AS technos,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "id", region.id,
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
    // (`
    //   SELECT
    //     offer.*,
    //     JSON_OBJECT(
    //       'id', company.id,
    //       'name', company.name,
    //       'banner', company.banner,
    //       'logo', company.logo,
    //       'description', company.description
    //     ) AS company
    //   FROM ${this.table} AS offer
    //   LEFT JOIN company ON offer.company_id = company.id
    // `);

    // const offers = rows.map((row) => ({
    //   id: row.id,
    //   title: row.title,
    //   details: row.details,
    //   advantages: row.advantages,
    //   salary: row.salary,
    //   consultant_id: row.consultant_id,
    //   job_id: row.job_id,
    //   company: JSON.parse(row.company)
    // }));

    // return offers;

    // (`
    //   SELECT offer.*,
    //     company.*,
    //     techno_offer.*
    //   FROM ${this.table} AS offer
    //   LEFT JOIN company ON offer.company_id = company.id
    //       LEFT JOIN techno_offer ON offer.id = techno_offer.offer_id

    // `);
    // return rows;

    // const offers = rows.map((row) => ({
    //   id: row.id,
    //   title: row.title,
    //   details: row.details,
    //   advantages: row.advantages,
    //   salary: row.salary,
    //   consultant_id: row.consultant_id,
    //   job_id: row.job_id,
    //   company: {
    //     id: row.company_id,
    //     name: row.name,
    //     banner: row.banner,
    //     logo: row.logo,
    //     description: row.description,
    //   },
    //   technologies: {
    //     id: row.techno_id,
    //   },
    // }));

    //   return offers;
  }
}

module.exports = OfferRepository;
