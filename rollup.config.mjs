import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import replace from '@rollup/plugin-replace';

export default defineConfig( {
	input: 'src/index.js',
	output: {
		file: 'dist/rollup.js',
		format: 'es'
	},
	plugins: [
		replace( {
			values: {
				'process.env.NODE_ENV': '"production"',
			}
		} ),
		commonjs( {
			sourceMap: true,
			defaultIsModuleExports: true
		} ),
		nodeResolve( {
			browser: true,
			preferBuiltins: false
		} ),
		esbuild( {
			include: /\.js$/,
			minify: true,
			legalComments: 'none',
			target: 'es2022'
		} )
	]
} );
