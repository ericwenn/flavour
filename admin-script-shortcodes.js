jQuery(document).ready(function() {
	shortcode_init();
});

function shortcode_init() {
	tinymce.create('tinymce.plugins.flavour_shortcodes', {
	     init : function(ed, url) {
	             ed.addCommand('flavour_shortcodes_click', function() {
	             	tinymce.activeEditor.windowManager.open({
	             		url: url+'/shortcodes.html',
	             		width: Math.min(600, (jQuery(window).width()*0.8))+'px',
	             		height: Math.min(500, (jQuery(window).height()*0.8))+'px',
	             		title: 'Which Shortcode?'
	             	});
	             });

	         ed.addButton('flavour_shortcodes', {title : 'Insert shortcode', cmd : 'flavour_shortcodes_click', image: url + '/assets/shortcode_icon.png' });
	     },   
	 });
	 tinymce.PluginManager.add('flavour_shortcodes', tinymce.plugins.flavour_shortcodes);
}