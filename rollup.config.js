import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import copy from 'rollup-plugin-copy'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    input: './src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'es',
        exports: 'named',
        preserveModules: true,
        sourcemap: false,
      },
    ],
    plugins: [
      // Resolve all the alias on bundle time
      alias({
        entries: [
          {
            find: '@assets',
            replacement: path.resolve(__dirname, './src/assets'),
          },
          {
            find: '@components',
            replacement: path.resolve(__dirname, './src/components'),
          },
          {
            find: '@businessLogic',
            replacement: path.resolve(__dirname, './src/business-logic'),
          },
          {
            find: '@helpers',
            replacement: path.resolve(__dirname, './src/helpers'),
          },
        ],
      }),
      postcss({
        extract: true,
        modules: false,
        use: [
          [
            'sass',
            {
              includePaths: [path.join(__dirname, 'src')],
            },
          ],
        ],
        extensions: ['.scss'],
      }),
      image({
        include: 'src/**',
        exclude: 'node_modules/**',
      }),
      // TS
      typescript({
        sourceMap: true,
        declarationDir: 'dist/types',
      }),
      resolve(),
      external(),
      terser(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      copy({
        targets: [{ src: 'src/assets/material-ui.d.ts', dest: 'dist/assets/material-ui.d.ts' }],
      }),
    ],
    external: [/node_modules/],
  },
]
