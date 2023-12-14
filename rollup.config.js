import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

/** @type {import('rollup').RollupOptions} */
const options = {
  input: './dist/esm/index.js',
  output: [
    {
      file: './dist/plugin.js',
      format: 'iife',
      name: 'capacitorLogRocket',
      globals: {
        '@capacitor/core': 'capacitorExports'
      },
      inlineDynamicImports: true
    },
    {
      file: './dist/plugin.cjs.js',
      format: 'cjs',
      inlineDynamicImports: true
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs()
  ]
};

export default options;
