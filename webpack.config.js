var path = require('path');
var webpack = require('webpack');
var rimraf = require('rimraf');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

if (process.argv.indexOf('-p') >= 0)
  process.env.NODE_ENV = 'production';

var prod = process.env.NODE_ENV == 'production';

module.exports = {
  context: path.join(__dirname, 'project'),
  entry: {
    app: './index',
  },
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '',
    filename: '[name].bundle.js'
  },
  devtool: prod ? null : 'inline-source-map',
  module: {
    loaders: [{
      test: [/\.js$/, /\.jsx$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-2']
      },
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!less-loader'
      }),
    }, {
      test: /\.(png|jpg|gif|svg|ttf|otf|eot|woff)$/,
      loader: 'file?name=assets/[name][hash:6].[ext]'
    }],
  },
  plugins: [
    {
      apply: compiler => rimraf.sync(compiler.options.output.path)
    },
    new webpack.DefinePlugin({
      isDebug: !prod,
    }),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};

if (prod) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      },
      comments: false,
    })
  );
}