const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const offerDetailsRouter = require("./offerDetails/router");

router.use("/offers", offerDetailsRouter);

const offerRouter = require("./offers/router");

router.use("/offers", offerRouter);

/* ************************************************************************* */

module.exports = router;
