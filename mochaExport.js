// Copyright ScottFreeCode 2016
// Licensed under the Academic Free License version 3.0

define(typeof mocha !== "undefined"
      && (typeof document === "undefined"
        || !document.getElementById
        || document.getElementById("mocha") !== mocha
      )
      ? [] : ["mocha"],
    function(mocha) {"use strict"
  if (!mocha) { mocha = self.mocha }
  mocha.ui("exports")
  return {
    load: function(name, req, onload, config) {
      req([name], function(value) {
        mocha.suite.emit("require", value)
        onload(value)
      })
    }
  }
})
