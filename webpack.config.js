const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: ["./src/server.ts"],
  target: "node",
  externals: [nodeExternals()],
  output: {
    filename: "server.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              fix: true
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
}