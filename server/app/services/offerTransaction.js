const mysql = require("mysql2/promise");
const OfferRepository = require("../../database/models/OfferRepository");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "your_database",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function createOffer(offerData) {
  const connection = await pool.getConnection();
  const offerRepository = new OfferRepository();

  try {
    await connection.beginTransaction();
    const newOfferId = await offerRepository.createOffer(offerData, connection);
    await connection.commit();
    return newOfferId;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  createOffer,
};
