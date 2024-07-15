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
      `select id, email, hashed_password, role from ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
  }

  async readByCandidates(id) {
    const [rows] = await this.database.query(
      `SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'firstname', technos_array.firstname,
                'lastname', technos_array.lastname,
                'phone', technos_array.phone,
                'email', technos_array.email,
                'role', technos_array.role,
                'technos', technos_array.technos
            )
        ) AS candidates
        FROM (
            SELECT 
                u.firstname, 
                u.lastname, 
                u.phone, 
                u.email, 
                u.role,
                c.id AS candidate_id,
                (SELECT JSON_ARRAYAGG(
                    JSON_OBJECT('name', t.name)
                )
                FROM techno AS t
                JOIN techno_candidate AS tc ON t.id = tc.techno_id
                WHERE tc.candidate_id = c.id) AS technos
            FROM user AS u
            JOIN candidate AS c ON u.id = c.user_id
            JOIN candidacy AS cd ON c.id = cd.candidate_id
            JOIN offer AS o ON cd.offer_id = o.id
            WHERE o.consultant_id = ?
        ) AS technos_array`,
      [id]
    );
    return rows;
  }
}

module.exports = UserRepository;
