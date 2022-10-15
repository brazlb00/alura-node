import express from "express";
import AutorController from "../controllers/autoresController.js";
//Cadastro de rotas
const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutoresPorID)
    .post("/autores", AutorController.cadastrarAutores)
    .put("/autores/:id", AutorController.atualizarAutores)
    .delete("/autores/:id", AutorController.excluirAutores)
export default router;

