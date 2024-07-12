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

  async readByCandidates(id) {
    const [rows] = await this.database.query(
      `SELECT 
      u.id,
      u.firstname, 
      u.lastname, 
      u.phone, 
      u.email, 
      u.role,
      cv.path AS cv,
      JSON_ARRAYAGG(
        JSON_OBJECT('name', t.name)
      ) AS technos
  FROM user AS u
  JOIN candidate AS c ON u.id = c.user_id
  JOIN candidacy AS cd ON c.id = cd.candidate_id
  JOIN offer AS o ON cd.offer_id = o.id
  JOIN region AS r ON o.consultant_id = r.consultant_id
  LEFT JOIN techno_candidate AS tc ON c.id = tc.candidate_id
  LEFT JOIN techno AS t ON tc.techno_id = t.id
  LEFT JOIN cv ON c.id = cv.candidate_id
  WHERE r.consultant_id = ? AND u.role = 'candidate'
  GROUP BY u.id, cv.path`,
      [id]
    );
    return rows;
  }
}

module.exports = UserRepository;