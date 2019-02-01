// JavaScript Document
(function($) {
	var printAreaCount = 0;
	$.fn.printArea = function() {
		var ele = $(this);
		var idPrefix = "printArea_";
		removePrintArea(idPrefix + printAreaCount);
		printAreaCount++;
		var iframeId = idPrefix + printAreaCount;
		var iframeStyle = 'position:absolute;min-width:100%;min-height:100%;left:-200%;top:-200%;';
		iframe = document.createElement('IFRAME');
		$(iframe).attr({
			style: iframeStyle,
			id: iframeId
		});
		document.body.appendChild(iframe);
		var doc = iframe.contentWindow.document;
		$(document).find("link")
			.filter(function() {
				return $(this).attr("rel").toLowerCase() == "stylesheet";
			})
			.each(function() {
				doc.write('<link type="text/css" rel="stylesheet" href="' +
					$(this).attr("href") + '" >');
			});
		doc.write('<div class="' + $(ele).attr("class") + '">' + $(ele).html() + '</div>');
		doc.close();
		var frameWindow = iframe.contentWindow;
		//frameWindow.close();
		frameWindow.focus();
		frameWindow.onload = function() {
			frameWindow.print();
		}
	}
	var removePrintArea = function(id) {
		$("iframe#" + id).remove();
	};
})(jQuery);