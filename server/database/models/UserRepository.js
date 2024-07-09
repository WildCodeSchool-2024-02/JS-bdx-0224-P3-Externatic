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

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific offer by its ID
    const [rows] = await this.database.query(
      `
      SELECT 
      user.id,
      user.firstname,
      user.lastname,
      user.email,
      user.phone,
      candidate.picture,
      region.name,
      (
        SELECT JSON_ARRAYAGG(JSON_OBJECT('name', techno.name))
        FROM techno_candidate
        INNER JOIN techno ON techno_candidate.techno_id = techno.id
        WHERE techno_candidate.candidate_id = candidate.id
      ) AS technos
  FROM ${this.table}
  JOIN candidate ON user.id = candidate.user_id
  JOIN region ON region.candidate_id = candidate.id
  WHERE user.id = ?
  
  
      `,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select id, firstname, lastname, email from ${this.table}`
    );
    return rows;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select email, hashed_password from ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
  }
}

module.exports = UserRepository;
