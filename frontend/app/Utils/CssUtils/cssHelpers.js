const $ = require('jquery');

const cssHelpers = {
	verticalAlign: function (el) {
		const $el = $(el);
		const $parent = $el.parent();
		const margin = ($parent.outerHeight() / 2) - ($el.outerHeight() / 2);
		$el.css('margin-top', margin + 'px');
		$el.css('margin-bottom', margin + 'px');
	}
};

module.exports = cssHelpers;
