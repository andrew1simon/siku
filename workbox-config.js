module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,png,jpg,jpeg,css,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};