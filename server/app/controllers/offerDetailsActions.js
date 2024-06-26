// Import access to database tables
const tables = require("../../database/tables");

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
    // browse,
    read,
    // edit,
    // add,
    // destroy,
  };
