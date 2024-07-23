const express = require("express");

const router = express.Router();
const {
  addFavorite,
  removeFavorite,
  readFavorite,
} = require("../../../controllers/favoriteActions");
const { verifyAuthCurrent } = require("../../../middlewares/verifyAuthCurrent");

router.post("/", verifyAuthCurrent, addFavorite);
router.delete("/", verifyAuthCurrent, removeFavorite);
router.get("/", verifyAuthCurrent, readFavorite);

module.exports = router;
