import Terser from 'terser-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'webpack.js',
    clean: false
  },
  plugins: [
    new IgnoreMomentLocale()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new Terser( {
        minify: Terser.swcMinify,
        terserOptions: {
          format: {
            comments: false
          }
        }
      } )
    ]
  }
};
