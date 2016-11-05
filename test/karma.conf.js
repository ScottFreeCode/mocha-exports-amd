module.exports = function(config) {
  config.set({
    basePath: "../",
    frameworks: ["mocha", "requirejs"],
    files: [
      "test/karma.js",
      {pattern: 'mochaExport.js', included: false},
      {pattern: 'example/*.js', included: false}
    ],
    autoWatch: false,
    singleRun: true,
    browsers: ["Firefox"],
    reporters: ["spec"],
    client: {
      mocha: {
        reporter: "html"
      }
    }
  })
}
