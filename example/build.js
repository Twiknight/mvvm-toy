'use strict'

const webpack = require('webpack')

const config = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: '.'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclunde: 'node_modules',
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  }
}

webpack(config, function (err, stats) {
  if (err) {
    console.log(err)
  }
  let jsonStats = stats.toJson()
  if (jsonStats.errors.length > 0) {
    jsonStats.errors.forEach((x) => console.log(x))
  }
  if (jsonStats.warnings.length > 0) {
    jsonStats.warnings.forEach((x) => console.log(x))
  }
})
