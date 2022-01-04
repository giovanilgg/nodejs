import {Sequelize} from "sequelize"
import dotenv from 'dotenv'
dotenv.config({path:'variables.env'})

const db = new Sequelize(process.env.BD_NOMBRE,process.env.BD_USER,process.env.BD_PASS, {
  //nombre de la bd , usuarioy contraseña
  host: process.env.BD_HOST, //direccion ip de donde se esta corriendo
  port: process.env.BD_PORT, //puerto
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorAliases: false,
});
export default db;
