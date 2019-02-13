const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = {
  step04: './step04/src/index',
  step05: './step05/src/index',
  step06: './step06/src/index',
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
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `${entryPoint}/index.html`),
        filename: '../index.html'
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
      watchContentBase: true
    }
  };
});
