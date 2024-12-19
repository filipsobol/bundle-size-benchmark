import { defineConfig } from 'vite';

export default defineConfig( {
  build: {
    target: 'es2022',
    emptyOutDir: false,
    assetsDir: '.',
    rollupOptions: {
      input: {
        app: './vite.html'
      },
      output: {
        entryFileNames: 'vite.js',
        format: 'es'
      }
    },
    modulePreload: {
      polyfill: false
    }
  },
  esbuild: {
    legalComments: 'none'
  },
} );
