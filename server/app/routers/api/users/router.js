const express = require("express");

const router = express.Router();

const { browse, add, read } = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/hashPassword");

router.get("/", browse);

router.post("/", hashPassword, add);

router.get("/:id", read);

module.exports = router;
