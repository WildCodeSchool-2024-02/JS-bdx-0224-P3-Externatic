const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const uploadRouter = require("./upload/router");

const offerRouter = require("./offers/router");

router.use("/offers", offerRouter);

router.use("/upload", uploadRouter);
const userRouter = require("./users/router");

router.use("/users", userRouter);

const authRouter = require("./auth/router");

router.use("/login", authRouter);
/* ************************************************************************* */

module.exports = router;
