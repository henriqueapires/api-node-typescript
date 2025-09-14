// importa tudo do express
import express from "express";

//criação de instancia do servidor - constroi um aplicativo express rodando na variável server
const server = express();

//pega da instância do express o método get para criar uma rota
//primeiro parâmetro é a rota, segundo é o callback que recebe a requisição e a resposta
//o método send envia uma resposta para o cliente
server.get("/", (req, res) => {
  return res.send("Olá, Dev!");
});

//exporta o servidor
export { server };
