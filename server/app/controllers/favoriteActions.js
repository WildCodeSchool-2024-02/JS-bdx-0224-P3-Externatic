const tables = require("../../database/tables");

const addFavorite = async (req, res, next) => {
  const { candidateId, offerId } = req.body;
  try {
    const insertId = await tables.favorite.create({candidateId, offerId});
    res.status(201).json({ insertId });
  } catch (err) {
    console.error("Error in addFavorite:", err); 
    next(err);
  }
};

const removeFavorite = async (req, res, next) => {
  const { candidateId, offerId } = req.body;
  try {
    await tables.favorite.delete({ candidateId, offerId });
    res.status(204).send();
  } catch (err) {
    console.error("Error in removeFavorite:", err);
    next(err);
  }
};

module.exports = { addFavorite, removeFavorite };