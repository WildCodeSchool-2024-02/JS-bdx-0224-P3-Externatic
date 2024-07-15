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

const readFavorite = async (req, res) => {
  const { candidateId, offerId } = req.params;
  try {
    const favorite = await tables.favorite.read({ candidateId, offerId });
    if (favorite) {
      res.status(200).json(favorite);
    } else {
      res.status(404).json({ error: "Favorite not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addFavorite, removeFavorite, readFavorite };