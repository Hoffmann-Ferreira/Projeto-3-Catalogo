import { response } from "express";
import { connection } from "../database/connection.js";
import { filmes } from "../model/filmes.js";

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

export const getApagar = async (req, res) =>{
  try{
    await filmes.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect("/")

  } catch(error){
    res.send(error.message)
  }

};

export const getCadastrar = (req, res) =>{
  res.render("cadastro.ejs")

}


