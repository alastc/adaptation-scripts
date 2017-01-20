// Initial bookmarklet code from https://www.smashingmagazine.com/2010/05/make-your-own-bookmarklets-with-jquery/ 


(function(){

	// the minimum version of jQuery we want
	var v = "1.3.2";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "//ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			
			// Neutralise layout CSS

			// Generally applicable
			$("*").css('float', 'none');
			$("*:not(table)").css('max-width', '100%');
			$("img").css('max-width', '90%').css('max-height', '80vh').css('display', 'block');

			// Mainly for block elements used for layout
			var layoutElements = $('article:visible, aside:visible, div:visible, footer:visible, header:visible, main, nav:visible, p:visible, section:visible, ul:visible, ol:visible, li:visible');
			
			// Don't override flexbox order, but do make it 1 column...
			$(layoutElements).each(function() {
				var cssTest = $(this).css('display');
				var elemName = $(this).get(0);
				
				if (cssTest == "flex"){
					$(this).css('flex-wrap', 'wrap');
					// Set children to 
					//console.log($("> *", this))
					$(this).children().css('flex', '0 1 100%').css('text-align', 'left');
					//$(this).find("> *").css('background', 'red'); // Is this needed?
				} else {
					$(this).css('display', 'block');
				}
			});
			
			// Make them fit to the body, and all part of the document flow.
			$(layoutElements).css('position', 'static');
			$(layoutElements).css('width', 'auto');
			$(layoutElements).css('height', 'auto');
			$(layoutElements).css('margin', '0');
			$(layoutElements).css('text-align', 'left');
			

			// prevent data tables from expanding the viewport and creating horizontal scrolling
			var dataTables = $('table:has(th)');
			$(dataTables).wrapAll( "<div style='width: 100%; overflow:auto; outline:3px grey solid;padding:3px' />");

			// reflow presentational tables
			var layoutTableCells = $('table[role=presentation] td');
			$(layoutTableCells).css('display', 'block');

			// Misc
			$('body').css('width', '20em');
			$('body').css('margin', '0 auto;');

			// ToDo: Could replace jquery if replicated the :visible selector from
			// https://github.com/jquery/jquery-compat-dist/blob/a03db51c378415bd358c7c94fcd9f3d74c67fdf6/src/css/hiddenVisibleSelectors.js

		})();
	}

})();