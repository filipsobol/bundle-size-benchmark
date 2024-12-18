import { defineConfig } from 'rolldown';
import { minify } from 'rollup-plugin-esbuild';

export default defineConfig( {
	input: 'src/index.js',
	output: {
		file: 'rolldown.js',
		dir: 'dist',
		format: 'es',
		minify: false,
		comments: 'none'
	},
	plugins: [
		minify( {
			minify: true,
			legalComments: 'none',
			target: 'es2022'
		} )
	],
} );
