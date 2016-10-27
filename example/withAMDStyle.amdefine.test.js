var define = typeof define === "function" && define.amd ? define : require("amdefine")(module, require)

define(["assert"],function(assert) {"use strict"


return {
	"Suite defined by AMD (with AMDefine shim)": {
		"Simple test": function() {
			assert(true)
		}
	}
}


})
