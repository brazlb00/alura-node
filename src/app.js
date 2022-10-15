import express from "express";
import db from "./config/dbConect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () =>{
    console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json()) //recebe json como respostas de requisições
routes(app);    //direcionamento das rotas
export default app