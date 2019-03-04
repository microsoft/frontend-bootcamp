const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const outPath = path.resolve(__dirname, 'docs');

const entries = {};
const nonWebpackedEntries = [];

function* getEntryPoint(step) {
  if (step.includes('step') || step.includes('playground')) {
    for (let prefix of ['', 'demo/', 'exercise/', 'final/']) {
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
  let isEntryPoint = false;

  for (let entryPoint of getEntryPoint(step)) {
    if (entryPoint) {
      entries[entryPoint.replace(/\/src\/index.*/, '').replace(/^\.\//, '')] = entryPoint;
      isEntryPoint = true;
    }
  }

  if (!isEntryPoint && (step.includes('step') || step.includes('playground'))) {
    nonWebpackedEntries.push(step);
  }
});

module.exports = function(env, argv) {
  return {
    entry: { ...entries, markdownReadme: './markdownReadme/src/index.ts' },
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
          chunks: [entry, 'markdownReadme']
        });
      }),
      new CopyWebpackPlugin([
        ...Object.keys(entries).map(entry => {
          return {
            from: `${entry}/src/**/*`,
            to: outPath
          };
        }),
        ...Object.keys(entries).map(entry => {
          return {
            from: `${entry}/../*.+(md|html)`,
            to: outPath
          };
        }),
        ...Object.keys(entries).map(entry => {
          return {
            from: `${entry}/*.+(md|html)`,
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
        },
        ...nonWebpackedEntries.map(entry => ({ from: `${entry}/**/*`, to: outPath }))
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
    devtool: argv.mode === 'development' ? 'eval' : 'source-map'
  };
};
