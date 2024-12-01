const {
  createSubmissions,
} = require("../../../controllers/submissionController");

async function submissionRoutes(fastify, options) {
  fastify.post("/", createSubmissions);
}

module.exports = submissionRoutes;
