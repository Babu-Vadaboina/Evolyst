const jwt = require("jsonwebtoken");
require("dotenv").config();

function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.JWT_ADMIN_TOKEN);
  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(401).send("Unauthorized from middleware");
  }
}

module.exports = {
  adminMiddleware,
};
