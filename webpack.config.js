// @ts-check

const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const entries = {};

function getEntryPoint(entry) {
  if (entry.includes('step') || entry.includes('playground')) {
    for (let suffix of ['.js', '.jsx', '.ts', '.tsx']) {
      if (fs.existsSync(`./${entry}/src/index${suffix}`)) {
        return `./${entry}/src/index${suffix}`;
      }
    }
  }
  return false;
}

fs.readdirSync('./').filter(entry => {
  const entryPoint = getEntryPoint(entry);

  if (entryPoint) {
    entries[entry] = entryPoint;
  }
});

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
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
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
      watchOptions: {
        ignored: /tmp.json/
      },
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
