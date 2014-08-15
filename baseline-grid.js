/***
-----------------------------------------------------------------------
   __        __   ___              ___     __   __     __         __  
  |__)  /\  /__` |__  |    | |\ | |__  __ / _` |__) | |  \     | /__` 
  |__) /~~\ .__/ |___ |___ | | \| |___    \__> |  \ | |__/ .\__/ .__/

-----------------------------------------------------------------------
  Version 1.0.0 - Copyright (c) 2014 Bailey Parker
-----------------------------------------------------------------------
  Released under the MIT License. See LICENSE for more.
-----------------------------------------------------------------------
*/

(function(window) {

	var document = window.document;
	var stylesheet = null;

	/**
	 * Draws a baseline grid over the current document.
	 * Supports any valid css/svg stroke value for `color`.
	 * `baselineHeight` should be unitless (assumed to be pixels).
	 * 
	 * @param  int  baselineHeight
	 * @param  string|undefined  color
	 * @return  undefined
	 */
	window.drawBaseline = function drawBaseline(baselineHeight, color) {

		// We only create one stylesheet (and re-use it on subsequent calls)
		if(stylesheet === null) {

			var style = document.createElement('style');

			// WebKit hack - see: http://davidwalsh.name/add-rules-stylesheets
			style.appendChild(document.createTextNode(''));

			document.head.appendChild(style);

			stylesheet = style.sheet;
		}

		// Sensible default for color
		color = color || 'black';

		// Uses replace and regex replace instead of standard interpolation purely for line length
		var svg = ('<svg xmlns="http://www.w3.org/2000/svg" width="4" height="#" viewbox="0 0 4 #">' +
				'<line x1="0" y1="#" x2="3" y2="#" stroke="@" stroke-width="1" />'+
			'</svg>').replace('@', color).replace(/\#/, baselineHeight);

		var styles = [
			'html{' +
				'position:relative' +
			'}',
			'html:after{' +
				'content:"";' +
				'display:block;' +
				'position:absolute;' +
				'top:0;' +
				'right:0;' +
				'bottom:0;' +
				'left:0;' +
				'z-index:9999;' +
				'width:auto;' +
				'height:auto;' +
				'pointer-events:none;' +
				// The 1px offset fixes an issue that causes the first line to display at
				// the top of the screen instead of offset downward by (baselineHeight - 1) px
				'background:url(data:image/svg+xml;base64,' + window.btoa(svg) + ') 0 -1px' +
			'}',
			'html:active:after{' +
				'display:none' +
			'}'
		];

		// Remove the old styles
		clearBaseline();

		// And add the new ones
		for(var i = 0, length = styles.length; i < length; i++) {

			// insertRule became available in IE 8 and SVGs in IE 9,
			// so we don't need to support the older addRule.
			stylesheet.insertRule(styles[i], i);
		}
	};

	/**
	 * Clears a baseline that has been drawn by drawBaseline().
	 *
	 * @return  undefined
	 */
	window.clearBaseline = function clearBaseline() {

		if(stylesheet !== null) {

			// Remove all styles in our baseline stylesheet
			while(stylesheet.cssRules.length > 0) {

				stylesheet.deleteRule(0);
			}
		}
	};

})(window);
