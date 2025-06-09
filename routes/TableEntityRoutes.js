const express = require("express");
const router = express.Router();
const tableController = require("../controllers/TableEntityController");

router.get("/", tableController.listarMesas);
router.post("/", tableController.criarMesa);
router.put("/:id", tableController.editarMesa);
router.delete("/:id", tableController.excluirMesa);

module.exports = router;
