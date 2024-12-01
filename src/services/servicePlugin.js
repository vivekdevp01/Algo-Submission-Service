// const SubmissionService = require("./submissionService");
const fastifyPlugin = require("fastify-plugin");
const SubmissionService = require("./submissionService");
async function servicePlugin(fastify, options) {
  console.log(fastify.submissionRepository);
  // console.log(fastify);
  fastify.decorate(
    "submissionService",
    new SubmissionService(fastify.submissionRepository)
  );
}
module.exports = fastifyPlugin(servicePlugin);
