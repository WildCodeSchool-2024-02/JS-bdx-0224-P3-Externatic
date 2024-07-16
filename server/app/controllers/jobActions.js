const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const jobs = await tables.job.readAll();

    res.status(200).json(jobs);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};