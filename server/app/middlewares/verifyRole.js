const verifyRole = (req, res, next) => {
  try {
    const isConsultant = req.auth.role === "consultant";
    if (!isConsultant) {
      return res.sendStatus(403);
    }
    return next();
  } catch (error) {
    return next(error); // Passe l'erreur au middleware de gestion des erreurs
  }
};

module.exports = { verifyRole };