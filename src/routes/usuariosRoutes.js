import { Router } from "express";
import {
  listarUsuarios,
  buscarUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
} from "../controllers/chamadosController.js";

const router = Router();
router.get("/usuarios", listarUsuarios);
router.get("/usuarios/:id", buscarUsuarioPorId);
router.post("/usuarios", criarUsuario);
router.put("/usuarios/:id", atualizarUsuario);
router.delete("/usuarios/:id", deletarUsuario);

export default router;
