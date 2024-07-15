const tables = require("../../database/tables");

const addFavorite = async (req, res) => {
  const { candidateId, offerId } = req.body;
  try {
    const insertId = await tables.favorite.create({ candidateId, offerId });
    res.status(201).json({ insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const removeFavorite = async (req, res) => {
  const { candidateId, offerId } = req.body;
  try {
    await tables.favorite.delete({ candidateId, offerId });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addFavorite, removeFavorite };