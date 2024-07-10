const express = require("express")

const router = express.Router()

const {browse} = require("../../../controllers/technoActions");

router.get("/", browse)

module.exports = router