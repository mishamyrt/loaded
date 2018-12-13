import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import {
    terser,
} from 'rollup-plugin-terser'

const amd = process.env.module || false

export default {
    input: `source/loaded${amd ? '.amd' : ''}.js`,
    output: {
        file: `dist/${amd ? 'loaded.amd' : 'loaded'}.js`,
        format: 'iife',
        name: 'Loaded',
    },
    external: ['define'],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: [
                ['@babel/preset-env', {
                    modules: false,
                }],
            ],
        }),
        terser(),
    ],
}
