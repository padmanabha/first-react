var path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: DIST_DIR + '/index.html',
  inject: 'body'
});

const jQueryPlugin = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery"
})


var config = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },

  devtool: 'source-map',
  module: {
    strictExportPresence: true,
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        include: SRC_DIR,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // See https://github.com/facebookincubator/create-react-app/issues/387.
      disableDotRule: true,
    },
  },
  plugins: [HtmlWebpackPluginConfig, jQueryPlugin]

};
module.exports = config;