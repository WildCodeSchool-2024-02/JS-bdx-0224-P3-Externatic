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
    const [candidat] = await this.database.query(
    `insert into candidate (user_id) values(?)`,
    [result.insertId]
  );
    return candidat.insertId;
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
        left JOIN techno ON techno_candidate.techno_id = techno.id
        WHERE techno_candidate.candidate_id = candidate.id
      ) AS technos
  FROM ${this.table}
  left JOIN candidate ON user.id = candidate.user_id
   left JOIN region ON region.candidate_id = candidate.id
  WHERE user.id = ?
      `,
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
  WHERE r.consultant_id = ? AND u.role = 'candidat'
  GROUP BY u.id, cv.path`,
      [id]
    );
    return rows;
  }
}

module.exports = UserRepository;
