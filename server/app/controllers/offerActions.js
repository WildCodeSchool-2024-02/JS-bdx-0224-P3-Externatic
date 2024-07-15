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

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  // add,
  // destroy,
};