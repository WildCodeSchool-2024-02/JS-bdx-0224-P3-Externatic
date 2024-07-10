const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const companies = await tables.company.readAll();

    res.status(200).json(companies);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  // read,
  // edit,
  // add,
  // destroy,
};