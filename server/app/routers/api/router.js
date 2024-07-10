const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const offerRouter = require("./offers/router");

router.use("/offers", offerRouter);

const technoRouter = require("./technos/router");

router.use("/technos", technoRouter);

const jobRouter = require("./jobs/router");

router.use("/jobs", jobRouter);

const companyRouter = require("./companies/router");

router.use("/companies", companyRouter);

/* ************************************************************************* */

module.exports = router;
