import {connection} from "../database/connection.js";
//43
let colecao = [
  {
    id: 1,
    img: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg",
    nome: "Senhor dos Aneis",
    ano: 2001,
  },
];

export const getIndex = (req, res) => {
  res.render("index.ejs", {
    colecao,
  });
};

