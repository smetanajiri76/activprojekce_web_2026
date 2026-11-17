$(document).ready(function() {
	$.fn.colorbox.settings.contentCurrent = '{current} / {total}';
	$("a[rel='picture']").colorbox();
});