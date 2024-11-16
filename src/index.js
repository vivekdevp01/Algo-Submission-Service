const fastify = require("fastify")({ logger: true });
const app = require("./app");

fastify.register(app);
// fastify.get("/ping", (req, res) => {
//   res.send({ data: "pong" });
// });
const PORT = 3000;
fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server listening on ${PORT}`);
});
