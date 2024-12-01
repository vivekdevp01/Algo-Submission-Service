const { fetchProblemDetails } = require("../apis/problemAdminApi");
const SubmissionProducer = require("../producers/submissionQueueProducer");
class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }
  async pingCheck() {
    return "poong";
  }
  async createSubmission(submission) {
    const problemIds = submission.problemId;

    const problemAdminApiResponse = await fetchProblemDetails(problemIds);
    if (!problemAdminApiResponse) {
      throw new Error("Internal Error");
    }
    // console.log(problemAdminApiResponse.data.codeStub);

    const languageCode = problemAdminApiResponse.data.codeStub.find(
      (codeStub) =>
        codeStub.language.toLowerCase() === submission.language.toLowerCase()
    );
    console.log(languageCode);
    submission.code =
      languageCode.startSnippet +
      "\n\n" +
      submission.code +
      "\n\n" +
      languageCode.endSnippet;
    // return true;

    const submissions = await this.submissionRepository.createSubmission(
      submission
    );
    if (!submissions) {
      throw { message: "not able to create a submission" };
    }

    const response = await SubmissionProducer({
      [submissions._id]: {
        code: submission.code,
        language: submission.language,
        inputCase: problemAdminApiResponse.data.testCases[0].input,
        outputCase: problemAdminApiResponse.data.testCases[0].output,
      },
    });
    return { queueResponse: response, submissions };
  }
}

module.exports = SubmissionService;
