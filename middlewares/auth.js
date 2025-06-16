// middleware/auth.js
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "sua_chave_secreta_muito_segura";

// Middleware para verificar autenticação
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: "Token de acesso requerido" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido" });
    }
    req.user = user;
    next();
  });
};

// Middleware para verificar se usuário está logado (para views)
const requireAuth = (req, res, next) => {
  const token = req.cookies?.auth_token;

  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.clearCookie("auth_token");
    return res.redirect("/login");
  }
};

// Middleware para redirecionar usuário logado
const redirectIfAuthenticated = (req, res, next) => {
  const token = req.cookies?.auth_token;

  if (token) {
    try {
      jwt.verify(token, JWT_SECRET);
      return res.redirect("/");
    } catch (error) {
      res.clearCookie("auth_token");
    }
  }
  next();
};

module.exports = {
  authenticateToken,
  requireAuth,
  redirectIfAuthenticated,
  JWT_SECRET,
};
