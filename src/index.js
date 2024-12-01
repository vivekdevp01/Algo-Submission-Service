const fastify = require("fastify")({ logger: true });
const app = require("./app");
const connectToDB = require("./config/dbConfig");
const serverConfig = require("./config/serverConfig");
fastify.register(app);
fastify.listen({ port: serverConfig.PORT }, async (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server listening on ${serverConfig.PORT}`);
  await connectToDB();
  console.log("connected to database");
});
