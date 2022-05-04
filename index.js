import { render } from "ejs";
import express from "express";
import path from "path";
import { routers } from "./src/routers/routers.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DB_BASE);

const __dirname = path.resolve(path.dirname(""));
const app = express();

app.set("view engine", "ejs");
app.use(routers);
app.use(express.static(path.join(__dirname, "public")));


const port = 3002;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port, () =>{
    console.log(`rodando na porta ${port}`)
} );


 
// app.get("/detalhes/:id", (req, res) =>{
//     let filme;
//     colecao.filter((element) => {
//         if(element.id == req.params.id){
//             filme = element;
//         };
//     });
//     res.render("detalhes.ejs", {
//         filme
//     });

// });

// app.get("/cadastro", (req, res) =>{
//     res.render("cadastro.ejs");
// });
// app.post("/cadastro", (req, res) =>{
//     let identifi = colecao[colecao.length - 1].id +1;
//     const {nome, img} = req.body;
//     colecao.push({id:identifi, nome, img});
//     // res.send("Fui enviado");
//     res.redirect("/");
// });

// Array exebido dentro do ejs


