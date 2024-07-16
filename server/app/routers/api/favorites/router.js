const express = require("express");

const router = express.Router();
const { addFavorite, removeFavorite, readFavorite } = require("../../../controllers/favoriteActions");
const { verifyToken } = require("../../../middlewares/verifyToken");

router.post("/", addFavorite);
router.delete("/", removeFavorite);
router.get("/", verifyToken,  readFavorite);

module.exports = router;