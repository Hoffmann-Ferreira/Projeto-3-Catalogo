// import { render } from "ejs";
import express from "express";
import path from "path";
import { routers } from "./src/routers/routers.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();
const port = 3002 || process.env.PORT
const __dirname = path.resolve(path.dirname(""));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(routers);
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, () =>{
    console.log(`rodando na porta ${port}`)
} );
