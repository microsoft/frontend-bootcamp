// @ts-check

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const entries = {
  'step1-04': './step1-04/src/index',
  'step1-05': './step1-05/src/index',
  'step1-06': './step1-06/src/index',
  'step1-07': './step1-07/src/index',
  'step2-01': './step2-01/src/index',
  'step2-02': './step2-02/src/index',
  playground: './playground/src/index'
};

module.exports = function() {
  return {
    entry: entries,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          },
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      ...Object.keys(entries).map(entry => {
        return new HtmlWebpackPlugin({
          template: path.join(__dirname, entry, 'index.html'),
          filename: `${entry}/index.html`,
          chunks: [entry]
        });
      }),
      new ForkTsCheckerWebpackPlugin({
        silent: true,
        async: false
      })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: '[name]/dist/[name].js',
      path: path.resolve(__dirname)
    },
    devServer: {
      contentBase: path.resolve(__dirname),
      watchContentBase: true,
      hot: false,
      stats: 'errors-only',
      overlay: true,
      inline: true
    },
    stats: 'minimal',
    mode: 'development',
    devtool: 'eval'
  };
};
