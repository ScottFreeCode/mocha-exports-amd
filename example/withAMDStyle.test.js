var define = typeof define === "function" && define.amd ? define : function define(deps, factory) { module.exports = factory.apply(undefined, deps.map(require)) }

define(["assert"],function(assert) {"use strict"


return {
	"Suite defined by AMD": {
		"Simple test": function() {
			assert(true)
		}
	}
}


})
