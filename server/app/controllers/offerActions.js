const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const offers = await tables.offer.readAll();

    res.status(200).json(offers);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
