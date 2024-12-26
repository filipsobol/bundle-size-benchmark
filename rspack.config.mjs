import { defineConfig } from '@rspack/cli';
import { IgnoreMomentLocale } from './webpack-plugin-ignore-moment-locales.mjs'; 

// The commented out options are valid, but for some reason increase the bundle size by a lot.

export default defineConfig({
  entry: './src/index.js',
  devtool: false,
  // target: 'es2022',
  output: {
    // chunkFormat: 'module',
    // chunkLoading: 'import',
    filename: 'rspack.js',
    clean: false,
  },
  plugins: [new IgnoreMomentLocale()],
});
