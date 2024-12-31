import { DefinePlugin } from 'webpack';
import Terser from 'terser-webpack-plugin';
import { plugins } from 'chart.js';

export default {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'webpack.js',
    clean: false
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'import.meta.env.DEV': (false).toString(),
      'import.meta.env.PROD': (true).toString(),
      'typeof window': JSON.stringify('object'),
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new Terser({
        minify: Terser.swcMinify,
        terserOptions: {
          format: {
            comments: false
          }
        }
      })
    ]
  }
};
