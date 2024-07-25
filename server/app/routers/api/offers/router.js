const express = require("express");
const { verifyAuthCurrent } = require("../../../middlewares/verifyAuthCurrent");

const router = express.Router();

const { browse, read, add } = require("../../../controllers/offerActions");

router.get("/", browse);

router.get("/:id", verifyAuthCurrent, read);

router.post("/", verifyAuthCurrent, add);

module.exports = router;
