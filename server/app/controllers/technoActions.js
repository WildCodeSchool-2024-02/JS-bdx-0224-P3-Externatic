const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const technos = await tables.techno.readAll();

    res.status(200).json(technos);
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
