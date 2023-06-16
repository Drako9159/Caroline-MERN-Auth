import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export function authRequired(req, res, next) {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "NO_TOKEN_PROVIDER" });
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "INVALID_TOKEN" });
   
    req.user = user;
    next();
  });
}
