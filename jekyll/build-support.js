module.exports = {
	//
	// helper to create front matter from a JS object.
	//
	createFrontMatter : function(options) {
	    var f = "---\n";
	    for (var k in options)
	        f += (k + ": " + options[k] + "\n");
	    f += "---\n";
	    return f;
	},

	//
	// helper to create a timestamp for inclusion in yaml front matter.
	//
	timestamp : function() {
	    var d = new Date();
	    return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " 12:00:00";
	}
};