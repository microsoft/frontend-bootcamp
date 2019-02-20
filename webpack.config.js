const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const outPath = path.resolve(__dirname, 'docs');

const entries = {};

function* getEntryPoint(step) {
  if (step.includes('step') || step.includes('playground')) {
    for (let prefix of ['', 'demo/', 'exercise/']) {
      for (let suffix of ['.js', '.jsx', '.ts', '.tsx']) {
        const entryRequest = `./${step}/${prefix}src/index${suffix}`;
        if (fs.existsSync(entryRequest)) {
          yield entryRequest;
        }
      }
    }
  }

  return false;
}

fs.readdirSync('./').filter(step => {
  for (let entryPoint of getEntryPoint(step)) {
    if (entryPoint) {
      entries[entryPoint.replace(/\/src\/index.*/, '').replace(/^\.\//, '')] = entryPoint;
    }
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
      new CopyWebpackPlugin([
        ...Object.keys(entries).map(entry => {
          return {
            from: `${entry}/src/**/*`,
            to: outPath
          };
        }),
        {
          from: 'assets/**/*',
          to: outPath
        },
        {
          from: 'index.html',
          to: outPath
        }
      ]),
      new ForkTsCheckerWebpackPlugin({
        silent: true,
        async: false
      })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: '[name]/[name].js',
      path: outPath
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
