const express = require("express")
const {verifyAuthCurrent} = require("../../../middlewares/verifyAuthCurrent")

const router = express.Router()

const {browse, read} = require("../../../controllers/offerActions");

router.get("/", verifyAuthCurrent, browse)

router.get("/:id", read);

module.exports = router