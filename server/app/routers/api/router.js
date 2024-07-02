const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const offerRouter = require("./offers/router");

router.use("/offers", offerRouter);

const userRouter = require("./users/router");

router.use("/users", userRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter);
/* ************************************************************************* */

module.exports = router;
