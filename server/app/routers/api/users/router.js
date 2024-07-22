const express = require("express");

const router = express.Router();

const {
  browse,
  add,
  read,
  readByCandidates,
  readCandidates,
} = require("../../../controllers/userActions");

const { hashPassword } = require("../../../services/hashPassword");

const { verifyToken } = require("../../../middlewares/verifyToken");
const { verifyRole } = require("../../../middlewares/verifyRole");

router.get("/", browse);

router.get("/:id", read);

router.get("/consultants/:id", verifyToken, verifyRole, readByCandidates);

router.get("/candidates/:id", readCandidates);

router.post("/", hashPassword, add);

module.exports = router;
