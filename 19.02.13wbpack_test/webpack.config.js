module.exports = {
	mode: 'development',
	entry: {
		main: __dirname + '/demo.js',
		main2: __dirname + '/demo2.js'
	},
	output: {
		path: __dirname + "/dist",
		filename: "[name].js"
	}
}
