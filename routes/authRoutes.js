// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const {
  authenticateToken,
  redirectIfAuthenticated,
} = require("../middlewares/auth");

// Rotas da API de autenticação
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.get("/me", authenticateToken, AuthController.me);

// Rotas das páginas de autenticação
router.get("/login", redirectIfAuthenticated, (req, res) => {
  res.render("auth/login", {
    pageTitle: "Login - ReservaGo",
    layout: "auth/layout",
    body: "login",
  });
});

router.get("/register", redirectIfAuthenticated, (req, res) => {
  res.render("auth/register", {
    pageTitle: "Registro - ReservaGo",
    layout: "auth/layout",
    body: "register",
  });
});

module.exports = router;
