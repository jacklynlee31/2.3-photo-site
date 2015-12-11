var merge = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');

var includepaths = [
	'assets',
	'bower_components',
	'bower_components/css-reset',
	'bower_components/fontawesome/scss',
	'bower_components/neat/app/assets/stylesheets',
	'bower_components/bourbon/app/assets/stylesheets',
	'bower_components/sassmatic/sass'
];

var cssFiles = compileSass(includepaths, 'app.scss', 'app.css');
module.exports = merge(['public', 'bower_components', cssFiles]);
