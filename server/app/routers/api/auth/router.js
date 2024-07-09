const express = require("express");

const router = express.Router();

const { genToken } = require("../../../middlewares/genToken");
const { verifyToken } = require("../../../middlewares/verifyToken");

router.post("/",  genToken, verifyToken);

module.exports = router;
