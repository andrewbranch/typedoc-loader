const path = require('path');
const webpack = require('webpack');
const MemoryFS = require('memory-fs');

module.exports = (fixture, options) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.ts$/,
        use: {
          loader: path.resolve(__dirname, '../lib/loader.js'),
          options
        }
      }]
    }
  });

  compiler.outputFileSystem = new MemoryFS();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      resolve(stats);
    });
  });
};
