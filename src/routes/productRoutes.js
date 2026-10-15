const express = require("express");
const {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", listar);
router.get("/:id", buscarPorId);
router.post("/", criar);
router.patch("/:id", atualizar);
router.delete("/:id", remover);

module.exports = router;