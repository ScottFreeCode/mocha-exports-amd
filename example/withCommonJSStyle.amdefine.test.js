var define = typeof define === "function" && define.amd ? define : require("amdefine")(module, require)

define(function(require,exports,module) {"use strict"


var assert = require("assert")

exports["Suite defined by AMD's simple CommonJS wrapper (with AMDefine shim)"] = {
  "Simple test": function() {
    assert(true)
  }
}


})
