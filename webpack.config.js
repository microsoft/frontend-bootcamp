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

module.exports = Object.keys(entries).map(entryPoint => {
  const entryRequest = entries[entryPoint];
  return {
    entry: { [entryPoint]: entryRequest },
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
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `${entryPoint}/index.html`),
        filename: '../index.html'
      }),
      new ForkTsCheckerWebpackPlugin({
        silent: true,
        async: false,
        useTypescriptIncrementalApi: true
      })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, entryPoint, 'dist')
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
});
