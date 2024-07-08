const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const verifyPassword = async (email, password, res) => {
  const user = await tables.user.readByEmailWithPassword(email);

  if (user == null) {
    return { verified: false };
  }

  const verified = await argon2.verify(user.hashed_password, password);

  const token = await jwt.sign(
    { sub: user.id, isConsultant: user.isConsultant },
    process.env.APP_SECRET,
    {
      expiresIn: "3h",
    }
  );

  res.json({
    token,
    user,
  });

  return { verified, user, token };
};

module.exports = { verifyPassword };