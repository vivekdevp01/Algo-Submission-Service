const testService = require("./testServices");
const fastifyPlugin = require("fastify-plugin");
async function servicePlugin(fastify, options) {
  fastify.decorate("testService", testService);
}
module.exports = fastifyPlugin(servicePlugin);
