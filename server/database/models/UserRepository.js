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

  async readAll() {
    const [rows] = await this.database.query(
      `select id, firstname, lastname, email from ${this.table}`

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select id, email, hashed_password, role from ${this.table} where email = ?`,
      [email]
    );
    return rows;
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
    JOIN consultant AS con ON o.consultant_id = con.id
    JOIN user AS con_user ON con.user_id = con_user.id
    LEFT JOIN techno_candidate AS tc ON c.id = tc.candidate_id
    LEFT JOIN techno AS t ON tc.techno_id = t.id
    LEFT JOIN cv ON c.id = cv.candidate_id
    WHERE con_user.id = ? AND u.role = 'candidat'
    GROUP BY u.id, u.firstname, u.lastname, u.phone, u.email, u.role, cv.path`,
      [id]
    );
    return rows;
  }
}

module.exports = UserRepository;