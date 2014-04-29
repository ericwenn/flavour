jQuery(document).ready(function() {

	// Init tabGroups
	$tabGroups = jQuery('.flavour-tabgroup');
	$tabGroups.each(function() {
		new TabGroup(jQuery(this));
	});



	// Init accordions
	$accordions = jQuery('.flavour-accordion');
	$accordions.each(function() {
		new Accordion(jQuery(this));
	})
});


// TabGroup
function TabGroup(ele) {
	this.parent = ele,
	this.tabHandles = this.parent.find('.flavour-tabgroup-tab'),
	this.tabBoxes = this.parent.find('.flavour-tabs-tab');

	this.parent.addClass('flavour-tabgroup--init');

	for(var i=0;i<this.tabHandles.length;i++) {
		this.tabHandles.eq(i).data('tabid', i);
		this.tabBoxes.eq(i).data('tabid', i);
	}
	this.tabHandles.on('click', {self: this}, this.changeTab);

	this.changeTab(0);
}
TabGroup.prototype.changeTab = function(e) {
	var self = typeof e === "object" ? e.data.self : this,
		id = typeof e === "object" ? jQuery(this).data('tabid') : e;

	if(typeof e === "object") {
		self.activeTabHandle.removeClass('flavour-tabgroup-tab--active').find('span').attr('aria-selected', false);
		self.activeTab.removeClass('flavour-tabs-tab--active');
	}
	self.activeTabHandle = self.tabHandles.eq(id).addClass('flavour-tabgroup-tab--active');
	self.activeTabHandle.find('span').attr('aria-selected', true);
	self.activeTab = self.tabBoxes.eq(id).addClass('flavour-tabs-tab--active');
};



function Accordion(ele) {
	this.parent = ele;
	this.sections = this.parent.find('.flavour-accordion-section');
	this.sectionHandles = this.sections.find('.flavour-accordion-section-handle');

	this.sections.removeClass('flavour-accordion-section--active');


	this.sectionHandles.on('click', {self: this}, this.changeSection);
	this.changeSection(0);

}

Accordion.prototype.changeSection = function(e) {
	var self = typeof e === "object" ? e.data.self : this,
		$this = typeof e === "object" ? jQuery(this) : self.sectionHandles.eq(e),
		$section = $this.parent('.flavour-accordion-section');

	if($section.hasClass('flavour-accordion-section--active')) {
		$section.removeClass('flavour-accordion-section--active');
	} else {
		if(typeof e === "object") {
			self.activeSection.removeClass('flavour-accordion-section--active');
		}

		self.activeSection = $section.addClass('flavour-accordion-section--active');
	}
};