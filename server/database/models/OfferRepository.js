const AbstractRepository = require("./AbstractRepository");

class OfferRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "offer" as configuration
    super({ table: "offer" });
  }

  // The C of CRUD - Create operation

  // async create(offer) {
  //   // Execute the SQL INSERT query to add a new offer to the "offer" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (title, user_id) values (?, ?)`,
  //     [offer.title, offer.user_id]
  //   );

  //   // Return the ID of the newly inserted offer
  //   return result.insertId;
  // }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific offer by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the offer
    return rows[0];
  }

  // async readAll() {
  //   // Execute the SQL SELECT query to retrieve all offers from the "offer" table
  //   const [rows] = await this.database.query(`select * from ${this.table}`);

  //   // Return the array of offers
  //   return rows;
  // }

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
}

module.exports = OfferRepository;
