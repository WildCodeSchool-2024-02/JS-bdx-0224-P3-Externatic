const express = require("express");

const multer = require("multer");

const router = express.Router();

const upload = multer({ dest: "./public/tmp/" });

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const UploadFile = require("../../../controllers/uploadController")

router.post("/", upload.single("myfile"), UploadFile.upload);
/* ************************************************************************* */

module.exports = router;
