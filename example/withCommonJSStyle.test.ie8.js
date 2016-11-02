var define = typeof define === "function" && define.amd ? define : function(factory) { factory(require, exports, module) }

define(function(require,exports,module) {"use strict"


var assert = require("assert")

exports["Suite defined by AMD's simple CommonJS wrapper (IE8-compatible shim)"] = {
  "Simple test": function() {
    assert(true)
  }
}



})
