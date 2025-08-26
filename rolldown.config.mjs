import { defineConfig } from 'rolldown';
import { minify } from 'rollup-plugin-esbuild';

export default defineConfig( {
	input: 'src/index.js',
	output: {
		file: 'dist/rolldown.js',
		format: 'es',
		minify: false,
		legalComments: 'none'
	},
	define: {
		'process.env.NODE_ENV': '"production"',
	},
	plugins: [
		minify( {
			minify: true,
			legalComments: 'none',
			target: 'es2022'
		} )
	],
} );
