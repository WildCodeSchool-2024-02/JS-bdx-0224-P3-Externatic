const AbstractRepository = require("./AbstractRepository");

class TechnoRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "offer" as configuration
    super({ table: "techno" });
  }

  // The C of CRUD - Create operation

  //   async create(offer) {

  //     // Execute the SQL INSERT query to add a new offer to the "offer" table
  //     const [result] = await this.database.query(
  //       `insert into ${this.table} (title, city, salary, details, advantages, type) values (?, ?, ?, ?, ?, ?)`,
  //       [offer.title, offer.city, offer.salary, offer.details, offer.advantages, offer.type]
  //     );

  //     // Return the ID of the newly inserted offer
  //     return result.insertId;
  //   }

  // The Rs of CRUD - Read operations

  //   async read(id) {
  //     // Execute the SQL SELECT query to retrieve a specific offer by its ID
  //     const [rows] = await this.database.query(
  //       `SELECT offer.*, company.*
  //       FROM ${this.table} AS offer
  //       INNER JOIN company ON offer.company_id=company.id
  //       WHERE offer.id = ?`,
  //       [id]
  //     );

  //     // Return the first row of the result, which represents the offer
  //     return rows[0];
  //   }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing offer

  // async update(offer) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an offer by its ID

  // async delete(id) {
  //   ...
  // }

  // async create(offer) {
  //   const [result] = await this.database.query(
  //     `INSERT INTO ${this.table} (title, details, city, advantages, salary) VALUES(?, ?, ?, ?, ?)`,
  //     [
  //       offer.title,
  //       offer.details,
  //       offer.city,
  //       offer.advantages,
  //       offer.salary,
  //     ]
  //   );

  //   return result.insertId;
  // }

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT id, name
      FROM ${this.table}
    `);

    return rows;
  }
}

module.exports = TechnoRepository;
