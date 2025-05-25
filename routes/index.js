const express = require("express");
const router = express.Router();

// Rota básica para teste
router.get("/", (req, res) => {
  res.send("Bem-vindo ao Reservantes!");
});

const RestaurantController = require("../controllers/RestaurantController.js");

// Rotas para o CRUD de restaurantes
router.post("/restaurantes", RestaurantController.criarRestaurante);
router.get("/restaurantes", RestaurantController.listarRestaurantes);
router.put("/restaurantes/:id", RestaurantController.editarRestaurante);
router.delete("/restaurantes/:id", RestaurantController.excluirRestaurante);

const AppUserController = require("../controllers/AppUserController");

// Rotas para usuários
router.post("/usuarios", AppUserController.criarUsuario);
router.get("/usuarios", AppUserController.listarUsuarios);
router.put("/usuarios/:id", AppUserController.editarUsuario);
router.delete("/usuarios/:id", AppUserController.excluirUsuario);

const EventController = require("../controllers/EventController");

// Rotas para eventos
router.post("/eventos", EventController.criarEvento);
router.get("/eventos", EventController.listarEventos);
router.put("/eventos/:id", EventController.editarEvento);
router.delete("/eventos/:id", EventController.excluirEvento);

const ReservationController = require("../controllers/ReservationController");

// Rotas para reservas
router.post("/reservas", ReservationController.criarReserva);
router.get("/reservas", ReservationController.listarReservas);
router.put("/reservas/:id", ReservationController.editarReserva);
router.delete("/reservas/:id", ReservationController.excluirReserva);

const TableEntityController = require("../controllers/TableEntityController");

// Rotas para mesas
router.post("/mesas", TableEntityController.criarMesa);
router.get("/mesas", TableEntityController.listarMesas);
router.put("/mesas/:id", TableEntityController.editarMesa);
router.delete("/mesas/:id", TableEntityController.excluirMesa);

// Exportando o router como um middleware Express
module.exports = router;
