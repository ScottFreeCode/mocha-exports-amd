var assert = require("assert")

exports["Integration"] = {
  "Shim": {
    "each file should have loaded a test or a suite": function test(done) {
      var Mocha = require("mocha")
      var mocha = new Mocha({ui: "exports"})
      mocha.files = Mocha.utils.lookupFiles("example/*.test.js", [])
      mocha.files = mocha.files.concat(Mocha.utils.lookupFiles("example/*.test.ie8.js", []))
      mocha.loadFiles(function filesLoaded() {
        assert.strictEqual(mocha.files.length, mocha.suite.suites.length + mocha.suite.tests.length)
        done()
      })
    }
  },
  "AMDefine/intercept": {
    "each file should have loaded a test or a suite": function test(done) {
      require("amdefine/intercept")
      var Mocha = require("mocha")
      var mocha = new Mocha({ui: "exports"})
      mocha.files = Mocha.utils.lookupFiles("example/*.test.noShim.js", [])
      mocha.loadFiles(function filesLoaded() {
        assert.strictEqual(mocha.files.length, mocha.suite.suites.length + mocha.suite.tests.length)
        done()
      })
    }
  }
}
