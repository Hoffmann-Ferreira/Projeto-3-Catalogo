import { render } from "ejs";
import express from "express";
import path from "path";

const __dirname = path.resolve(path.dirname(""));
const app = express();

app.set("view engine", "ejs");



const port = 3002;

app.listen(port, () =>{
    console.log(`rodando na porta ${port}`)
} );

app.get("/", (req, res) => {
    res.render("index.ejs");

});
 
app.get("/detalhes", (req, res) =>{
    res.render("detalhes.ejs");

});

app.get("/cadastro", (req, res) =>{
    res.render("cadastro.ejs");
});
