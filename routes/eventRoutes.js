const express = require("express");
const router = express.Router();
const eventController = require("../controllers/EventController");

router.get("/", eventController.listarEventos);
router.post("/", eventController.criarEvento);
router.put("/:id", eventController.editarEvento);
router.delete("/:id", eventController.excluirEvento);

module.exports = router;
