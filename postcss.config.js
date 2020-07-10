module.exports = {
	plugins: {
		autoprefixer: {
			browsers: ['Android >= 4.0', 'iOS >= 8'],
		},
		'postcss-pxtorem': {
			rootValue: 133.4,
			propList: ['*'],
		},
	},
}
