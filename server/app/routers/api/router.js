
const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const uploadRouter = require("./upload/router");

router.use("/upload", uploadRouter);

const offerRouter = require("./offers/router");

router.use("/offers", offerRouter);

const technoRouter = require("./technos/router");

router.use("/technos", technoRouter);

const jobRouter = require("./jobs/router");

router.use("/jobs", jobRouter);

const companyRouter = require("./companies/router");

router.use("/companies", companyRouter);

const userRouter = require("./users/router");

router.use("/users", userRouter);

const authRouter = require("./auth/router");

router.use("/login", authRouter);

const favoriteRouter = require("./favorites/router");

router.use("/favorites", favoriteRouter);

/* ************************************************************************* */

module.exports = router;
