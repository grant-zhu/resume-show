const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist')
    },
     module: {
     rules: [
	 {
             test: /\.css$/,
             use: [
		 'style-loader',
		 'css-loader'
             ]
	 },
	 {
	     test: /\.ts$/,
	     use: 'ts-loader',
	     exclude: /node_modules/
	     
	 },
	 {
	     test:/\.(png|svg|jpg|gif)$/,
	     use:'file-loader'
	     
	 }
     ]
     },
    resolve:{
	extensions:['.ts','.js']
    }
};
