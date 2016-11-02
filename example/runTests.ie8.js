"use strict"

require.config({
  shim:{
    "mocha/mocha":{
      exports:"mocha"
    }
  },
  packages:[{
    name: "mocha",
    location: "../node_modules/mocha",
    main: "mocha"
  },{
    name: "domReady",
    location: "../node_modules/requirejs-domready",
    main: "domReady"
  }/*/,{ // This is how you would use it as a dependency (change * to ** to switch).
    name: "mochaExport",
    location: "node_modules/mocha-exports-amd",
    main: "mochaExport"
  }]/*/],
  paths: {
    "mochaExport": "../mochaExport"
  }/*//**/
})

require(["mocha",
         "mochaExport!withAMDStyle.test.ie8",
         "mochaExport!withCommonJSStyle.test.ie8",
         // these tests should be identical in effect;
         // the style or absence of shim should not affect
         // usage with an actual browser AMD loader
         "mochaExport!withAMDStyle.amdefine.test",
         "mochaExport!withCommonJSStyle.amdefine.test",
         "mochaExport!withAMDStyle.test.noShim",
         "mochaExport!withCommonJSStyle.test.noShim",
         "domReady!"],
        function(mocha) {
  if (!mocha) { mocha = self.mocha } // In case shim config were not set up.
  // other setup options for mocha here:
  //mocha.checkLeaks(true)
  mocha.run()
})
