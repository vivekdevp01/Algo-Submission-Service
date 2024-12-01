const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User id for the submission is missing"],
  },
  problemId: {
    type: String,
    required: [true, "Problem id for the submission is missing"],
  },
  code: {
    type: String,
    required: [true, "code for the submission is missing"],
  },
  language: {
    type: String,
    required: [true, "language for the submission is missing"],
  },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Running", "Success", "Failed", "RE", "TLE", "WA"],
  },
});
const Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;
