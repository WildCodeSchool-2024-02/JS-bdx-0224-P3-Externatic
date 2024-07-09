const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const offers = await tables.offer.readAll();

    res.status(200).json(offers);
  } catch (err) {
    next(err);
  }
};
// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific offer from the database based on the provided ID
    const offer = await tables.offer.read(req.params.id);

    // If the offer is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the offer in JSON format
    if (offer == null) {
      res.sendStatus(404);
    } else {
      res.json(offer);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {

  try {
    const offer  = req.body;

    if(offer == null) {
      res.status(400).json({ error: "Missing required fields" });
    }
    const insertId = await tables.offer.create(offer);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
// try {
//   const { offer, region, job, techno, company } = req.body;

//   // Assurez-vous que les champs requis sont présents
//   if (!offer || !region || !job || !techno || !company) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   const insertId = await tables.offer.create(offer, region, job, techno, company);
//   res.status(201).json({ insertId });
// } catch (err) {
//   next(err);
// }
// };

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
