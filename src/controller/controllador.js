import { response } from "express";
import { connection } from "../database/connection.js";
import { filmes } from "../model/filmes.js";

export const getIndex = async (req, res) => {
  try {
    const exibFilme = await filmes.findAll();
    res.render("index.ejs", {
      exibFilme,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const filmesDetalhes = await filmes.findByPk(req.params.id);

    res.render("detalhes.ejs", {
      filmesDetalhes,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getApagar = async (req, res) => {
  try {
    await filmes.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

export const getCadastrar = (req, res) => {
  res.render("cadastro.ejs", { toggle: false });
};

export const postCadastrar = async (req, res) => {
  const { nome, sinopse, genero, ano, imagem, trailer, critica } = req.body;
  try {
    if (!nome) {
      res.send("O campo nome é obrigatório");
    } else if (!sinopse) {
      res.send("O campo sinopse é obrigatório");
    } else if (!genero) {
      res.send("O campo genero é obrigatório");
    } else if (!ano) {
      res.send("O campo ano é obrigatório");
    } else if (!imagem) {
      res.send("O campo imagem é obrigatório");
    } else if (!trailer) {
      res.send("O campo trailer é obrigatório");
    } else if (!critica) {
      res.send("O campo critica é obrigatório");
    } else {
      await filmes.create({
        nome,
        sinopse,
        genero,
        ano,
        imagem,
        trailer,
        critica,
      });
      res.render("cadastro.ejs", { toggle: true });
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const getEditar = async (req, res) => {
  try {
    const filmeAtual = await filmes.findByPk(req.params.id);

    res.render("editar.ejs", {
      filmeAtual,
    });
  } catch (error) {
    res.send(error.message);
  }
};
export const postEditar = async (req, res) => {
  try {
    const { nome, sinopse, genero, ano, imagem, trailer, critica } = req.body;
    await filmes.update(
      {
        nome: nome,
        sinopse: sinopse,
        genero: genero,
        ano: ano,
        imagem: imagem,
        trailer: trailer,
        critica: critica,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};
