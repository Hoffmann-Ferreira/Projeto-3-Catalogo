import express from "express";
import { getIndex } from "../controller/controllador.js";

export const routers = express.Router();

routers.get("/", getIndex);