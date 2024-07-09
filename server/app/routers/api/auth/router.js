const express = require("express");

const router = express.Router();

const { login } = require("../../../controllers/authActions");
const { genToken } = require("../../../middlewares/genToken");
const { verifyToken } = require("../../../middlewares/verifyToken");

router.post("/",  genToken, verifyToken, login);

module.exports = router;
