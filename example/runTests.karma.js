"use strict"

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

require(testFiles, __karma__.start)
