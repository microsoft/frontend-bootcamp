const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const entries = {
  step04: './step04/src/index',
  step05: './step05/src/index',
  step06: './step06/src/index',
  'step2-01': './step2-01/src/index',
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
        async: false
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
    devtool: 'cheap-module-source-map'
  };
});
