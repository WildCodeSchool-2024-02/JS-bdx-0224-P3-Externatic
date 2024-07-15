const express = require("express");

const router = express.Router();
const { addFavorite, removeFavorite } = require("../../../controllers/favoriteActions");

router.post("/", addFavorite);
router.delete("/", removeFavorite);

module.exports = router;