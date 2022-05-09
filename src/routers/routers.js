import express from "express";
import { 
    getIndex, 
    getDetalhes,
    getApagar,
    getCadastrar,
    postCadastrar

} from "../controller/controllador.js";

export const routers = express.Router();

routers.get("/", getIndex);
routers.get("/detalhes/:id", getDetalhes);
routers.get("/apagar/:id", getApagar);
routers.get("/cadastrar", getCadastrar);
routers.post("/cadastrar", postCadastrar);

