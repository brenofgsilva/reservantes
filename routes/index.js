const express = require("express");
const router = express.Router();

// Rota básica para teste
router.get("/", (req, res) => {
  res.send("Bem-vindo ao Reservantes!");
});

// Exportando o router como um middleware Express
module.exports = router;
