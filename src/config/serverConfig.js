const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  REDIS_PORT: process.env.REDIS_PORT || "6379",
  REDIS_HOST: process.env.REDIS_HOST,
  ATLAS_URL: process.env.ATLAS_URL,
  NODE_ENV: process.env.NODE_ENV,
  PROBLEM_ADMIN_SERVICE: process.env.PROBLEM_ADMIN_SERVICE,
};
