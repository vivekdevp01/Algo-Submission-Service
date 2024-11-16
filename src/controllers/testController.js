const testService = require("../services/testServices");
async function pingRequest(req, res) {
  console.log(this.testService);
  const response = await testService.pingCheck();
  return res.send({ data: response });
}
module.exports = { pingRequest };
