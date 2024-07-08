
const express = require("express");

const router = express.Router();

const offerRouter = require("./offers/router")

router.use("/offers", offerRouter);

const userRouter = require("./users/router")

router.use("/users", userRouter)

module.exports = router;
