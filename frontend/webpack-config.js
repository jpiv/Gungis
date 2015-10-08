module.exports = {
	entry: ["./app/app.jsx"],
	output: {
		filename: "[name].bundle.js",
		chunkFilename: "[id].bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel?stage=0'
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			}
		]
	}
}