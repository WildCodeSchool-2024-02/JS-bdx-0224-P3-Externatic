const verifyRole = (req, res, next) => {
  try {
    if (req.auth.role !== "consultant") {
      throw new Error("Forbidden: Insufficient role");
    }
    next();
  } catch (error) {
    res.sendStatus(403);
  }
};

module.exports = { verifyRole };