import fastify from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { createPoll } from "./routes/create-poll";
const app = fastify();

app.register(createPoll);

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("HTTP Server running 🚀"));
