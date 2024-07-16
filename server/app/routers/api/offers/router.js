const express = require("express")
const {verifyAuthCurrent} = require("../../../middlewares/verifyAuthCurrent")

const router = express.Router()

const {browse, read, add} = require("../../../controllers/offerActions");

router.get("/", verifyAuthCurrent, browse)

router.get("/:id", read);

router.post("/", add);

module.exports = router