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
  const exibFilme = await connection.query('SELECT * FROM filmes.js', {
    model: filmes
  })
  console.log(exibFilme)
  console.log(filmes)
  res.render("index.ejs", {
    exibFilme
  })
};

