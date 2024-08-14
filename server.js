// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('hello world ')

//     return response.end()
// })

// server.listen(3333)

/// request => traz informações das requisições que estão sendo feitas para dentro da minha API
/// response => é o objeto que vou utilizar para devolver a resposta para quem está chamando a API

import { fastify } from "fastify";

const server = fastify();

// GET => Busca alguma informação
// POST => Criação de informação
// DELETE => Deletar informação
// PUT => alteração de informação
// PATCH => alteração específica

// Route Paramenter => parametro que é enviado na rota que pode ser utilizado com id

server.post("/videos", () => {
  return "Hello World";
});

server.get("/videos", () => {
  return "video";
});

server.put("/videos/:id", () => {
  return "video";
});

server.delete("/videos/:id", () => {
  return "video";
});

server.listen({
  port: 3333,
});
