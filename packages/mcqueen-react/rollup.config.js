const path = require('path')
const babel = require('@rollup/plugin-babel').default
const typescript = require('rollup-plugin-typescript2')
const commonjs = require("@rollup/plugin-commonjs")
const postcss = require("rollup-plugin-postcss")
const copy = require('rollup-plugin-cpy')
const json = require('@rollup/plugin-json')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

const { dependencies, peerDependencies } = require('./package.json')

const formats = [{
  name: 'es',
  preserveModules: true,
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      typescript: require('typescript'),
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: path.join('dist', 'es', 'src')
        }
      }
    }),
    babel(),
    nodeResolve(),
    commonjs(),
    json(),
    copy({
      files: ['src/**/*.scss', 'src/**/*.css', '!dist/**'],
      dest: path.join('dist', 'es'),
      options: {
        parents: true,
      }
    }),
  ],
  external: id =>
    // Don't attempt to bundle dependencies and peerDependencies.
    peerDependencies[id] ||
    id === "next" ||
    id === "next/router" ||
    id === "next/link" ||
    // Don't attempt to parse CSS modules.
    /module\.s?css$/.test(id)
}, {
  name: 'cjs',
  preserveModules: false,
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      typescript: require('typescript'),
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: path.join('dist', 'cjs')
        }
      }
    }),
    babel(),
    nodeResolve(),
    commonjs(),
    json(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    })
  ],
  external: id =>
    // Don't attempt to bundle dependencies and peerDependencies.
    peerDependencies[id] ||
    id === "next" ||
    id === "next/router" ||
    id === "next/link"
}]

module.exports = formats.map(format => ({
  input: './src/index.tsx',
  plugins: format.plugins,
  output: {
    dir: path.join('dist', format.name),
    format: format.name,
    preserveModules: format.preserveModules
  },
  external: format.external
}))
