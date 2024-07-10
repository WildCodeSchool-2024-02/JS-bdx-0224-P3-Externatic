const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const offerRouter = require("./offers/router");

router.use("/offers", offerRouter);

const technoRouter = require("./technos/router");

router.use("/technos", technoRouter);

/* ************************************************************************* */

module.exports = router;
