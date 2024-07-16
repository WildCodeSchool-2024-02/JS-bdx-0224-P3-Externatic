const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    if (req.auth && req.auth.id) {
      const userFavorites = await tables.offer.readAllWithFavorites(req.auth.id);
      res.json(userFavorites);
    } else {
      const offers = await tables.offer.readAll();
      res.json(offers);
    }
  } catch (err) { 
    console.error("Browse error:", err);
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const offer = await tables.offer.read(req.params.id);

    if (offer == null) {
      res.sendStatus(404);
    } else {
      res.json(offer);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const offer = req.body;

    const insertId = await tables.offer.create(offer);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
