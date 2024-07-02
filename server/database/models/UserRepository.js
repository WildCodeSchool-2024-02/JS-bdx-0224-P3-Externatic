const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashed_password) values(?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
      ]
    );

    return result.insertId;
  }
  
  async readAll() {
    const [rows] = await this.database.query(
      `select id, firstname, lastname, email from ${this.table}`
    )
    return rows
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [email]
    )
    return rows[0]
  }
}

module.exports = UserRepository;
