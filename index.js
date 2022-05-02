import { render } from "ejs";
import express from "express";
import path from "path";

const __dirname = path.resolve(path.dirname(""));

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


const port = 3002;
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.listen(port, () =>{
    console.log(`rodando na porta ${port}`)
} );

app.get("/", (req, res) => {
    res.render("index.ejs", {
        colecao
    });

});
 
app.get("/detalhes/:id", (req, res) =>{
    let filme;
    colecao.filter((element) => {
        if(element.id == req.params.id){
            filme = element;
        };
    });
    res.render("detalhes.ejs", {
        filme
    });

});

app.get("/cadastro", (req, res) =>{
    res.render("cadastro.ejs");
});
app.post("/cadastro", (req, res) =>{
    let identifi = colecao[colecao.length - 1].id +1;
    const {nome, img} = req.body;
    colecao.push({id:identifi, nome, img});
    // res.send("Fui enviado");
    res.redirect("/");
});

// Array exebido dentro do ejs


let colecao = [
    {
        id: 1,
        img: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg",
        nome: "Senhor dos Aneis",
        ano: 2001,
    }
];
