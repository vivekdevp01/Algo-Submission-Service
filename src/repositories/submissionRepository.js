const Submission = require("../models/submissionModel");

class SubmissionRepository {
  constructor() {
    this.submissionModel = Submission;
  }
  async createSubmission(submission) {
    try {
      const response = await this.submissionModel.create(submission);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
module.exports = SubmissionRepository;
