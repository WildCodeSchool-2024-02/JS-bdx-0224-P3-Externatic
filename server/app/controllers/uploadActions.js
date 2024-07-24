const fs = require("fs");

class UploadFile {
  static upload = (req, res) => {
    fs.rename(
      req.file.path,
      `public/images/${req.file.originalname}`,
      (err) => {
        if (err) {
          res.status(400).send("Error while uploading");
        } else {
          res.status(203).json({
            msg: "Upload success",
            url: `${process.env.CLIENT_URL}/public/images/${req.file.originalname}`,
          });
        }
      }
    );
  };
}

module.exports = UploadFile;