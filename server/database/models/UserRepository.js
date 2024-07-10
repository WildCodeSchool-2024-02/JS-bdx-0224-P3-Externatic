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
      `select firstname, lastname, role from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readConsultantCandidates(consultantId) {
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
      [consultantId]
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
