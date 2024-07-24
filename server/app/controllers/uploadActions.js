const tables = require("../../database/tables");

const add = async (req, res, next) => {
  const cv = req.body;
  const userId = req.auth.id; 

  try {
    const insertId = await tables.cv.create({ ...cv, userId }); 
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = { add };
