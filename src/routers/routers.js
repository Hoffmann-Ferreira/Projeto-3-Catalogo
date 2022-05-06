import express from "express";
import { getIndex } from "../controller/controllador.js";
import { getDetalhes } from "../controller/controllador.js";

export const routers = express.Router();

routers.get("/", getIndex);

routers.get("/detalhes/:id", getDetalhes);

