const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashed_password) values(?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.hashedPassword]
    );

    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select id, firstname, lastname, email from ${this.table}`
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select id, firstname, lastname, email from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select id, email, hashed_password, role from ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
  }

  async readCandidates(id) {
    const [rows] = await this.database.query(
      `select firstname, lastname, email, cv.path AS cv_path,
      cv.name AS cv_name
    FROM user u
    JOIN candidate c ON u.id = c.user_id
    LEFT JOIN cv ON c.id = cv.candidate_id
    WHERE u.id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = UserRepository;
