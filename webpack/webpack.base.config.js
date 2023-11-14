/***
 *  BASE WEBPACK CONFIGURATION
 */
const path = require('path')

module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    alias: {
      '#assets': path.resolve(process.cwd(), 'src/assets'),
      '#components': path.resolve(process.cwd(), 'src/components'),
      '#constants': path.resolve(process.cwd(), 'src/constants'),
      '#graphql': path.resolve(process.cwd(), 'src/graphql'),
      '#hooks': path.resolve(process.cwd(), 'src/hooks'),
      '#pages': path.resolve(process.cwd(), 'src/pages'),
      '#store': path.resolve(process.cwd(), 'src/store'),
      '#styles': path.resolve(process.cwd(), 'src/styles'),
      '#test': path.resolve(process.cwd(), 'src/test'),
      '#utils': path.resolve(process.cwd(), 'src/utils'),
    },
  },
  plugins: [...options.plugins],
  optimization: options.optimization,
  module: {
    rules: [
      {
        // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          // JavaScript version to compile to
          target: 'es2015',
        },
      },
    ],
  },
})
