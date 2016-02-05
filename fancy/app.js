var Fancy = require('./fancy');

var mod = new Fancy();

mod.on('success', function (data) {

	console.log(data); // { this_is_fancy:'indubitably' }

});