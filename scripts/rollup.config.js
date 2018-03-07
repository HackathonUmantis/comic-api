import path from 'path';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/bundle.js',
    format: 'cjs'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      module: true,
      modulesOnly: true,
      extensions: ['.js', '.json'],
    }),
    babel({
      extends: path.resolve('scripts', '.babelrc.prod'),
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    json({
      include: 'node_modules/**',
    }),
    uglify()
  ]
};
