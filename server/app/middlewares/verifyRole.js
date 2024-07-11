const verifyRole = (req, res, next) => {
  if (req.auth.role !== "consultant") {
    return res.sendStatus(403);
  }
  next();
  return null;
};

module.exports = { verifyRole };
