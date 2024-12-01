// async function pingRequest(req, res) {
//   const response = await this.testService.pingCheck();
//   return res.send({ data: response });
// }

async function createSubmissions(req, res) {
  // console.log(req.body);
  try {
    const response = await this.submissionService.createSubmission(req.body);
    return res.status(200).send({ data: response });
  } catch (err) {
    console.log(err);
  }
}
module.exports = { createSubmissions };
