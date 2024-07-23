const express = require("express");

const router = express.Router();

const {
  add,
  read,
  readByCandidates,
  readCandidates,
  browse,
} = require("../../../controllers/userActions");

const { hashPassword } = require("../../../services/hashPassword");
const { verifyAuthCurrent } = require("../../../middlewares/verifyAuthCurrent");

router.get("/", verifyAuthCurrent, browse);

router.get("/:id", verifyAuthCurrent, read);

router.get("/consultants/:id", verifyAuthCurrent, readByCandidates);

router.get("/candidates/:id", verifyAuthCurrent, readCandidates);

router.post("/", hashPassword, add);

router.get("/:id", verifyAuthCurrent, read);

module.exports = router;
