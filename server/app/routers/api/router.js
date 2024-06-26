const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const offerDetailsRouter = require("./offerDetails/router");

router.use("/offers", offerDetailsRouter);

/* ************************************************************************* */

module.exports = router;
