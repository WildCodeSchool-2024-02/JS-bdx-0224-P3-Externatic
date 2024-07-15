const AbstractRepository = require("./AbstractRepository");

class OfferRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "offer" as configuration
    super({ table: "offer" });
  }

  // The C of CRUD - Create operation

  async create(offer) {
    try {
      await this.database.query("START TRANSACTION");

      // Insérer l'offre
      const [offerResult] = await this.database.query(
        `INSERT INTO ${this.table} (title, city, salary, details, advantages, type, consultant_id, company_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          offer.title,
          offer.city,
          parseInt(offer.salary, 10),
          offer.details,
          offer.advantages,
          offer.type,
          offer.consultantId,
          parseInt(offer.company, 10),
        ]
      );
      const offerId = offerResult.insertId;

      // Insérer les technos
      const technoPromises = offer.techno.map((tech) =>
        this.database.query(
          `INSERT INTO techno_offer (offer_id, techno_id) VALUES (?, ?)`,
          [offerId, tech]
        )
      );

      await Promise.all(technoPromises);

      await this.database.query("COMMIT");
      return offerId;
    } catch (error) {
      await this.database.query("ROLLBACK");
      console.error("Erreur lors de la création de l'offre :", error);
      throw error;
    }
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific offer by its ID
    const [rows] = await this.database.query(
      `
      SELECT 
        offer.id, 
        offer.title, 
        offer.type,
        offer.details, 
        offer.city, 
        offer.advantages, 
        offer.salary, 
        company.name, 
        company.banner, 
        company.logo, 
        company.description, 
        (
          SELECT JSON_ARRAYAGG(JSON_OBJECT('name', techno.name))
          FROM techno_offer
          INNER JOIN techno ON techno_offer.techno_id = techno.id
          WHERE techno_offer.offer_id = offer.id
        ) AS technos
      FROM ${this.table} AS offer
      INNER JOIN company ON offer.company_id = company.id
      WHERE offer.id = ?
      `,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `
        SELECT  offer.id,
                offer.title,
                offer.type,
                offer.details,
                offer.city,
                company.name AS company_name,
                (
                  SELECT JSON_ARRAYAGG(JSON_OBJECT('name', techno.name))
                  FROM techno_offer
                  INNER JOIN techno ON techno_offer.techno_id = techno.id
                  WHERE techno_offer.offer_id = offer.id
                ) AS technos
                FROM ${this.table} AS offer
                INNER JOIN company ON offer.company_id = company.id
      `
    );

    return rows;
  }
}

module.exports = OfferRepository;
