import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'; // Add this import

export default {
  input: 'src/index.js', // Your entry point
  output: [
    {
      file: 'dist/index.js', // Output file
      format: 'cjs', // CommonJS format
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js', // ES Module output
      format: 'esm', // ES Module format
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    json(),
    postcss({ // Add postcss plugin
      modules: true, // Enable CSS modules
      extract: true, // Extract CSS into separate file
    }),
    terser(),
  ],
  external: ['react', 'react-dom'], // External dependencies
};
