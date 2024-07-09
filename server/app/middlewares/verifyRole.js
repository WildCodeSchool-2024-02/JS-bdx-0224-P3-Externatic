const verifyRole = (req, res, next) => {
  if (req.auth.role !== "consultant") {
    return res.sendStatus(403);
  }
  return next();
};

module.exports = { verifyRole };
