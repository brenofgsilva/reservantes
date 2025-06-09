const express = require("express");
const router = express.Router();
const appUserController = require("../controllers/AppUserController");

router.get("/", appUserController.listarUsuarios);
router.post("/", appUserController.criarUsuario);
router.put("/:id", appUserController.editarUsuario);
router.delete("/:id", appUserController.excluirUsuario);

module.exports = router;
