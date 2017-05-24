// Combination of spacing, font-family and change-colour

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
			

			// Color
			$("*").css('color', 'black');
			$("*").css('background-color', '#fff');
			$("*").css('background-image', 'none !important');

			// font family
			$("*:not([role='img'])").css('font-family', '"Verdana"');

			// Spacing
			var wordElements = $('p, li, h1, h2, h3, h4, h5, h6');

			$(wordElements).css("letter-spacing", "0.1em");
			$(wordElements).css("line-height", "1.5");
			$(wordElements).css("word-spacing", "0.03em");


		})();
	}

})();