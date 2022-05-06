import { response } from "express";
import { connection } from "../database/connection.js";
import { filmes } from "../model/filmes.js"
// let colecao = [
//   {
//     id: 1,
//     img: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg",
//     nome: "Senhor dos Aneis",
//     ano: 2001,
//   },
// ];

export const getIndex = async (req, res) => {

  try {
    const exibFilme = await filmes.findAll();
    res.render("index.ejs",{
      exibFilme
    });

  } catch(error) {
    res.send(error.message)
  };
};

export const getDetalhes = async (req, res) => {

  try{
    const filmesDetalhes = await filmes.findByPk(req.params.id);
    
    res.render("detalhes.ejs", {
      filmesDetalhes
    });

  } catch(error){
    res.send(error.message)
  };
};

