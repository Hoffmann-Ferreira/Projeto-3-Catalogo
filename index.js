import express from "express";

const app = express();
const port = 3002;

app.listen(port, () =>{
    console.log(`rodando na porta ${port}`)
} );

app.get("/", (req, res) => {
    res.send("Ola mundo");

});
//02:43