const express = require("express");

const router = express.Router();
const { addFavorite } = require("../../../controllers/favoriteActions");

router.post("/", addFavorite);

module.exports = router;