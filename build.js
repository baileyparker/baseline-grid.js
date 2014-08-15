var uglify = require('uglify-js'),
	fs = require('fs'),
	mustache = require('mustache');

// Minify & save
var minified = uglify.minify('baseline-grid.js', {output: {comments: /^\*\*/}});
fs.writeFileSync('baseline-grid.min.js', minified.code);

// Minify (w/ no comments) & save (for bookmarklet)
minified = uglify.minify('baseline-grid.js');

var readmeTemplate = fs.readFileSync('README.md-template').toString();

var bookmarklet = 'javascript:void((function(){' + minified.code + 'window.drawBaseline(24);})());',
	clearBookmarklet = 'javascript:void(window.clearBaseline());';

fs.writeFileSync('README.md', mustache.render(readmeTemplate, {

	code: minified.code,
	bookmarklet: bookmarklet,
	clearBookmarklet: clearBookmarklet,
}));
