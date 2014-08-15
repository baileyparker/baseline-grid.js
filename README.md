baseline-grid.js
================

A simple, dependency-free (referenes no external images/scripts/styles) baseline overlay script/bookmarklet. Works by creating an SVG in the background and overlaying it on top of the `<html>` tag with the pseduo-element `::after`.

## Usage

Baseline-grid.js is a quick drop in for on-the-fly designing. Copy the following into a bookmark to use Baseline-grid.js as a bookmarklet (see the end of the code for the customization options):

    javascript:void((function(){!function(e){var t=e.document,l=null;e.drawBaseline=function(n,a){if(null===l){var i=t.createElement("style");i.appendChild(t.createTextNode("")),t.head.appendChild(i),l=i.sheet}a=a||"black";var o='<svg xmlns="http://www.w3.org/2000/svg" width="4" height="#" viewbox="0 0 4 #"><line x1="0" y1="#" x2="3" y2="#" stroke="@" stroke-width="1" /></svg>'.replace("@",a).replace(/\#/,n),r=["html{position:relative}",'html:after{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:0;z-index:9999;width:auto;height:auto;pointer-events:none;background:url(data:image/svg+xml;base64,'+e.btoa(o)+") 0 -1px}","html:active:after{display:none}"];clearBaseline();for(var s=0,d=r.length;d>s;s++)l.insertRule(r[s],s)},e.clearBaseline=function(){if(null!==l)for(;l.cssRules.length>0;)l.deleteRule(0)}}(window);window.drawBaseline(24);})());

(or you can drag this link to your bookmarks bar: [Baseline - 24px](javascript:void((function(\){!function(e){var t=e.document,l=null;e.drawBaseline=function(n,a){if(null===l){var i=t.createElement("style");i.appendChild(t.createTextNode("")),t.head.appendChild(i),l=i.sheet}a=a||"black";var o='<svg xmlns="http://www.w3.org/2000/svg" width="4" height="#" viewbox="0 0 4 #"><line x1="0" y1="#" x2="3" y2="#" stroke="@" stroke-width="1" /></svg>'.replace("@",a).replace(/\#/,n),r=["html{position:relative}",'html:after{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:0;z-index:9999;width:auto;height:auto;pointer-events:none;background:url(data:image/svg+xml;base64,'+e.btoa(o)+") 0 -1px}","html:active:after{display:none}"];clearBaseline();for(var s=0,d=r.length;d>s;s++)l.insertRule(r[s],s)},e.clearBaseline=function(){if(null!==l)for(;l.cssRules.length>0;)l.deleteRule(0)}}(window);window.drawBaseline(24);})());)).

To clear the currently visible baseline grid:

    javascript:void(window.clearBaseline());

(or you can drag this link into your bookmarks bar: [Clear Baseline](javascript:void(window.clearBaseline(\));))

If you prefer tinkering in the dev tools, you can also copy and paste this snippet into the console to draw and clear the baseline overlay on the fly:

    !function(e){var t=e.document,l=null;e.drawBaseline=function(n,a){if(null===l){var i=t.createElement("style");i.appendChild(t.createTextNode("")),t.head.appendChild(i),l=i.sheet}a=a||"black";var o='<svg xmlns="http://www.w3.org/2000/svg" width="4" height="#" viewbox="0 0 4 #"><line x1="0" y1="#" x2="3" y2="#" stroke="@" stroke-width="1" /></svg>'.replace("@",a).replace(/\#/,n),r=["html{position:relative}",'html:after{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:0;z-index:9999;width:auto;height:auto;pointer-events:none;background:url(data:image/svg+xml;base64,'+e.btoa(o)+") 0 -1px}","html:active:after{display:none}"];clearBaseline();for(var s=0,d=r.length;d>s;s++)l.insertRule(r[s],s)},e.clearBaseline=function(){if(null!==l)for(;l.cssRules.length>0;)l.deleteRule(0)}}(window);

In addition, the baseline-grid.js script can be included at the bottom of your `<body>` and used programatically:

    <script src="/js/baseline-grid.js"></script>
    <script>
    	// Draw a 22px red baseline
		drawBaseline(22, 'red');

		// And then later remove it
		clearBaseline();
    </script>

## But what do I do with it?

See [this Tuts+ tutorial on implementing vertical rythmn](http://webdesign.tutsplus.com/articles/improving-layout-with-vertical-rhythm--webdesign-14070) and this chapter from [*The Elements of Typographic Style Applied to the Web*](http://webtypography.net/2.2.2).

## Browser Support

Support is dependent on SVG support, so that means:

 - All versions of Chrome (+ mobile), Firefox (+ Android), Safari (+ iOS Safari), and Opera (+ mobile)
 - Android Browser >= 4.4
 - IE >= 9

## Contributing

Contributions are wanted and welcomed! Please submit an issue to discuss your contribution first. When submitting a pull request, be sure to run `npm run-script make` to minify the script and auto-upate this readme. Please commit both the `README` and `baseline-grid.min.js`.