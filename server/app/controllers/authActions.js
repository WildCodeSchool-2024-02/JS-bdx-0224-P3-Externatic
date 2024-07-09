const jwt = require("jsonwebtoken");
const { verifyPassword } = require("../middlewares/passwordVerification");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { verified, user } = await verifyPassword(email, password);
    const token = await jwt.sign(
      { role: user.role, email: user.email },
      process.env.APP_SECRET,
      {
        expiresIn: "3h",
      }
    );

    if (verified) {
      res.json({
        token,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { login };
