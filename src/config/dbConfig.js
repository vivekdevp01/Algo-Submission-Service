const mongoose = require("mongoose");
const { ATLAS_URL, NODE_ENV } = require("./serverConfig");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(ATLAS_URL);
    }
  } catch (err) {
    console.log("unable to connect to Db");
    console.log(err);
  }
}

module.exports = connectToDB;
