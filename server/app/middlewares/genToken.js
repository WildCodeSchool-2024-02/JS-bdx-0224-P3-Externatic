const jwt = require("jsonwebtoken");

const { verifyPassword } = require("./passwordVerification");

const genToken = async (req, res, next) => {
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

export default genToken;
