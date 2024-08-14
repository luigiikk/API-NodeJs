import { fastify } from "fastify";
import { DatabaseMemory } from "./databasememory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send(); //201 => algo foi criado
});

server.get("/videos", () => {
  const videos = database.list();

  return videos;
});

server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send(); // 204 => sucesso sem conteudo na resposta
});

server.delete("/videos/:id", () => {
  return "video";
});

server.listen({
  port: 3333,
});
