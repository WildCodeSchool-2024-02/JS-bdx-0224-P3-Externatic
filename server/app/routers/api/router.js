const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const offerRouter = require("./offers/router");

router.use("/offers", offerRouter);

const userRouter = require("./users/router");

router.use("/users", userRouter);

/* ************************************************************************* */

module.exports = router;
