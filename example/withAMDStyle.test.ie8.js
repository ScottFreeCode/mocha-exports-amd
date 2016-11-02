var define = typeof define === "function" && define.amd ? define : function(deps, factory) { module.exports = factory.apply(undefined, deps.map(require)) }

define(["assert"],function(assert) {"use strict"


return {
	"Suite defined by AMD (IE8-compatible shim)": {
		"Simple test": function() {
			assert(true)
		}
	}
}


})
