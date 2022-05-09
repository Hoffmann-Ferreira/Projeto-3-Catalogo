import  Sequelize  from "sequelize";
import { connection } from "../database/connection.js";

export const filmes = connection.define("filmes", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sinopse:{
        type: Sequelize.STRING,
        allowNull: false
    },
    genero:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ano:{
        type: Sequelize.INTEGER,
        
    },
    imagem:{
        type: Sequelize.STRING,
        allowNull: false
    },
    trailer:{
        type: Sequelize.STRING,
        allowNull: false
    },
    critica:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
}, {
    freezeTableName: true,
    createdAt: false,
    updateAt: false,
    timestamps: false,
});


