const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/companyActions");

router.get("/", browse);

module.exports = router;
