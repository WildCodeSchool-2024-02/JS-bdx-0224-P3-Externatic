const jwt = require("jsonwebtoken");

const genToken = async (req, res, next) => {
  try {
    const token = await jwt.sign(
      { role: req.user.role, id: req.user.id },
      process.env.APP_SECRET,
      {
        expiresIn: "1h",
      }
    );
    req.token = token;
    next();
  } catch (err) {
    res.sendStatus(422);
  }
};

module.exports = { genToken };
