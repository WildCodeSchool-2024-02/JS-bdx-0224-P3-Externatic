const jwt = require("jsonwebtoken");

const genToken = async (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ error: "Invalid email or password" });
    return;
  }
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
    next(err);
  }
};

module.exports = { genToken };
