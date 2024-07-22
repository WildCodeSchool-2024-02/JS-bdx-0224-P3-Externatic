const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/candidacyActions");

router.post("/:id", add);


module.exports = router;
