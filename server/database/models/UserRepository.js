const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email, phone, password, role) values(?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone,
        user.password,
        user.role,
      ]
    );

    return result.insertId;
  }
  
  async readAll() {
    const [rows] = await this.database.query(
      `select * from ${this.table}`
    )
    return rows
  }
}

module.exports = UserRepository;
