const axiosInstance = require("../config/axiosInstance");
const { PROBLEM_ADMIN_SERVICE } = require("../config/serverConfig");
// const { PROBLEM_ADMIN_SERVICE } = require("../config/serverConfig");
const PROBLEM_ADMIN_API_URL = `${PROBLEM_ADMIN_SERVICE}/api/v1`;
console.log(PROBLEM_ADMIN_API_URL);
async function fetchProblemDetails(problemId) {
  try {
    const uri = PROBLEM_ADMIN_API_URL + `/problems/${problemId}`;
    console.log(uri);
    const response = await axiosInstance.get(uri);
    // console.log("api response", response.data);
    return response.data;
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
}

module.exports = {
  fetchProblemDetails,
};
