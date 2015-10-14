module.exports = {
	entry: ["./app/router.jsx"],
	output: {
		filename: "[name].bundle.js",
		chunkFilename: "[id].bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.(jsx)$/,
				loader: 'babel?stage=0'
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader'
			}
		]
	}
}