const express = require("express");
const router = express.Router();
const { redirectIfAuthenticated } = require("../middlewares/auth");

// Páginas de autenticação (renderização direta)
router.get("/login", redirectIfAuthenticated, (req, res) => {
  res.render("auth/login", {
    pageTitle: "Login - ReservaGo",
    layout: "auth/layout",
  });
});

router.get("/register", redirectIfAuthenticated, (req, res) => {
  res.render("auth/register", {
    pageTitle: "Registro - ReservaGo",
    layout: "auth/layout",
  });
});

// Página inicial - Dashboard
router.get("/", (req, res) => {
  res.render("layout/main", {
    pageTitle: "ReservaGo - Dashboard",
    content: "pages/dashboard",
  });
});

// Página de restaurantes
router.get("/restaurantes", (req, res) => {
  res.render("layout/main", {
    pageTitle: "Restaurantes - ReservaGo",
    content: "pages/restaurantes",
  });
});

// Página de eventos
router.get("/eventos", (req, res) => {
  res.render("layout/main", {
    pageTitle: "Eventos - ReservaGo",
    content: "pages/eventos",
  });
});

// Página de reservas
router.get("/reservas", (req, res) => {
  res.render("layout/main", {
    pageTitle: "Reservas - ReservaGo",
    content: "pages/reservas",
  });
});

// Página de usuários
router.get("/usuarios", (req, res) => {
  res.render("layout/main", {
    pageTitle: "Usuários - ReservaGo",
    content: "pages/usuarios",
  });
});

// Página de mesas
router.get("/mesas", (req, res) => {
  res.render("layout/main", {
    pageTitle: "Mesas - ReservaGo",
    content: "pages/mesas",
  });
});

module.exports = router;
