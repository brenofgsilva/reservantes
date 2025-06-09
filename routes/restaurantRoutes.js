const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/RestaurantController");

router.get("/", restaurantController.listarRestaurantes);
router.post("/", restaurantController.criarRestaurante);
router.put("/:id", restaurantController.editarRestaurante);
router.delete("/:id", restaurantController.excluirRestaurante);

module.exports = router;
