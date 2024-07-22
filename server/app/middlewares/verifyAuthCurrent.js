const jwt = require("jsonwebtoken");

const verifyAuthCurrent = (req, res, next) => {
  const authorizationHeader = req.get("Authorization");
  if (authorizationHeader) {
    const [type, token] = authorizationHeader.split(" ");
    if (type === "Bearer" && token) {
      try {
        const decodedToken = jwt.verify(token, process.env.APP_SECRET);
        req.auth = {
          role: decodedToken.role,
          id: decodedToken.id,
        };
      } catch (err) {
        // Invalid token, we can handle it or just ignore
      }
    }
  }
  next();
};
module.exports = { verifyAuthCurrent };