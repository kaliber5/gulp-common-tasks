/**
 *
 * @param {string} testsuite The name of the testsuite
 * @param {string} testcase The name of the testcase
 * @param {string} classname Additional info for testcase
 * @param {string} error The error message
 * @param {string} errortype The type of the error
 * @param {string} filename The Filename with path
 * @param {function} cb The callback
 */
function errorWriter(testsuite, testcase, classname, error, errortype, filename, cb) {
  var junitWriter = require('junitwriter'),
  writer = new junitWriter(),
  suites = writer.getTestsuites(),
  suite = suites.addTestsuite(testsuite),
  testCase = suite.addTestcase(testcase, classname);
  testCase.addError(error, errortype);
  writer.save(filename, cb);
}

module.exports = errorWriter;
