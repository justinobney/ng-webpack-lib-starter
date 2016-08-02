var webpack = require('webpack');
var path = require('path');
var env = require('yargs').argv.mode;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var config = require('./package.json');

var libraryName = config.name;

var plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    angular: 'angular',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader:"babel",
        query: { presets: ['es2015', 'stage-1'] }
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins,
  eslint: {
    configFile: './.eslintrc.js'
  }
};

module.exports = config;
