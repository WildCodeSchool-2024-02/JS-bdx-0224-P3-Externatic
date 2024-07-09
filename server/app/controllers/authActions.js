const { verifyPassword } = require("../middlewares/passwordVerification");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { verified, user } = await verifyPassword(email, password);

    if (verified) {
      res.json(user);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { login };