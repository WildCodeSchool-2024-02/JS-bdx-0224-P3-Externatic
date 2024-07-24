const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/uploadActions");
const { uploadImage } = require("../../../middlewares/multer");

router.post(
  "/add",
  uploadImage,
  add
);

module.exports = router;
