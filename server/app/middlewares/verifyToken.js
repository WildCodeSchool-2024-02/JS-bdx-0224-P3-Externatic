const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (!authorizationHeader) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    const decodedToken = jwt.verify(token, process.env.APP_SECRET);
    req.auth = {
      role: decodedToken.role,
      id: decodedToken.id,
    };
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = { verifyToken };
