const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/ReservationController");

router.get("/", reservationController.listarReservas);
router.post("/", reservationController.criarReserva);
router.put("/:id", reservationController.editarReserva);
router.delete("/:id", reservationController.excluirReserva);

module.exports = router;
