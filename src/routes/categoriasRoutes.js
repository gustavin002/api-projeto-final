import { Router } from "express";
import {
  ListarCategorias,
  BuscarCategoriaPorId,
  criarCategoria,
  atualizarCategoria,
  deletarCategoria,
} from "../controllers/categoriasController.js";

const router = Router();

router.get("/categorias", ListarCategorias);
router.get("/categorias/:id", BuscarCategoriaPorId);
router.post("/categorias", criarCategoria);
router.put("/categorias/:id", atualizarCategoria);
router.delete("/categorias/:id", deletarCategoria);

export default router;
