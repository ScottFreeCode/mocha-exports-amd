module.exports = function(config) {
  config.set({
    frameworks: ["mocha", "requirejs"],
    files: [
      "example/runTests.karma.js",
      {pattern: 'mochaExport.js', included: false},
      {pattern: 'example/*.js', included: false}
    ],
    autoWatch: false,
    singleRun: true
  })
}
