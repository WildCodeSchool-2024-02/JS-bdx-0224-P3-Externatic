const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/jobActions");

router.get("/", browse);

module.exports = router;
