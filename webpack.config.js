const { VueLoaderPlugin}=require('vue-loader');

module.exports={
	entry: './src/app/index.js',//este es el archivo de entrada desde donde arrancará el webpack
	output:{
		path: __dirname+'/src/public/js/',// y aquí será donde guadaremos el código convertido
		filename: 'bundle.js' // este será el nombre del archivo final que contendrá todo
	},
	module:{
		rules:[
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		},{
			test: /\.vue$/,
			loader: 'vue-loader'
		},{
			test: /\.css$/,
			use: [
			'vue-style-loader',
			'css-loader'
			],
		},{
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]?[hash]'
			}
		}      
		]
	},
	plugins:[
	new VueLoaderPlugin()
	],
	
// 	resolve:{
// 		fallback:{ 
// 			"zlib": require.resolve("browserify-zlib"),
// 			"querystring": require.resolve("querystring-es3"),
// 			"stream": require.resolve("stream-browserify"),
// 			"path": require.resolve("path-browserify"),
// 			"crypto": require.resolve("crypto-browserify"),
// 			"fs": false,
// 			"http": require.resolve("stream-http"),
// 			"net": false,
// 			
// 			"os":false,
// 			"https":false,
// 			"child_process":false,
// 			"dns": false,
// 			"tls":false,
// 		}
// 	},
	stats: {
		'errorDetails': true
	}
};
