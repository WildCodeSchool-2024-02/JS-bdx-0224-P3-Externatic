const express = require("express");

const router = express.Router();

const { browse, add } = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/hashPassword");

router.get("/", browse);

router.post("/", hashPassword, add);

module.exports = router;
