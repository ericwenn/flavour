jQuery(document).ready(function() {
	accordions = jQuery(".flavour-options-section");
	accordions.removeClass('flavour-options-section--nojs');

	accordions.each(function() {
		new Accordion(jQuery(this));
	});
});


function Accordion(acc) {
	this.accordion = acc;
	this.accordionTrigger = acc.find('.flavour-options-section-title');
	this.active = false;
	this.accordionTrigger.on('click', {"self": this}, this.toggle);
}
Accordion.prototype.toggle = function(e) {
	var self = e.data.self;
	if(self.active) {
		self.accordion.removeClass('flavour-options-section--active');
	} else {
		self.accordion.addClass('flavour-options-section--active');
	}
	self.active = !self.active;
}
