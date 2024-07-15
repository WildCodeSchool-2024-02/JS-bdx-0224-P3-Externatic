const express = require("express");

const router = express.Router();
const { addFavorite, removeFavorite, readFavorite } = require("../../../controllers/favoriteActions");

router.post("/", addFavorite);
router.delete("/", removeFavorite);
router.get("/", readFavorite);

module.exports = router;