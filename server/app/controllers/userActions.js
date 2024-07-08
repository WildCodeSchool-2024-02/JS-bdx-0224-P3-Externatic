const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    // Fetch a specific offer from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the offer is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the offer in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readConsultantCandidates = async (req, res, next) => {
  try {
    const candidates = await tables.user.readConsultantCandidates(
      req.params.id
    );

    if (candidates === null) {
      res.sendStatus(404);
    } else {
      res.json(candidates);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const user = req.body;

  try {
    const insertId = await tables.user.create(user);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, add, read, readConsultantCandidates };
