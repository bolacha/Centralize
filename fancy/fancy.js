var EventEmitter = require('events').EventEmitter;

function FancyModule() {

	EventEmitter.call(this);

	// And other fancy code

}

FancyModule.prototype = Object.create(EventEmitter.prototype);

FancyModule.prototype.fancified = function () {

	// Just one of many fancy functions available in my fancy module

	var fancyData = {
		this_is_fancy: 'indubitably'
	};

	this.emit('success', fancyData);

}

module.exports = FancyModule;