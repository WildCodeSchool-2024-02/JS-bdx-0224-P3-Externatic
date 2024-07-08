const express = require("express");

const router = express.Router();

const {
  browse,
  add,
  read,
  readConsultantCandidates,
} = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/hashPassword");

router.get("/", browse);

router.get("/:id", read);

router.get("/consultants/:id", readConsultantCandidates);

router.post("/", hashPassword, add);

module.exports = router;
