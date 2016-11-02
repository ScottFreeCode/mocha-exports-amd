"use strict" // TODO: review this elsewhere

var testFiles = []
var TEST_REGEXP = /[.]test[.]/i

Object.keys(__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    testFiles.push("mochaExport!" + file.replace(/^\/base\/|[.]js$/g, ""))
  }
})

require.config({
  baseUrl: '/base',

  paths: {
    "assert": "example/assert"
  }
})

require(testFiles, function runTests() {
  mocha.checkLeaks(true)
  var metaTestSuite = new Mocha.Suite("Integration", mocha.suite)
  metaTestSuite.addTest(new Mocha.Test("each file should have loaded a test or a suite", function test() {
    if (testFiles.length + 1 !== mocha.suite.suites.length + mocha.suite.tests.length) {
      throw new Error("Wrong number of tests; for " + (testFiles.length + 1) + " files got " + mocha.suite.tests.length + " top-level tests and " + mocha.suite.suites.length + " suites.")
    }
  }))
  mocha.suite.addSuite(metaTestSuite)
  __karma__.start()
})
