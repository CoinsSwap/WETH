import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default [{
  input: 'src/index.js',
  output: [{
    file: './index.js',
    format: 'cjs'
  }],
  plugins: [
    json(),
    resolve({
      mainFields: ['browser', 'module', 'main']
    }),
    commonjs({
      namedExports: {
        "bn.js": [ "BN" ],
        "hash.js": [ "hmac", "ripemd160", "sha256", "sha512" ],
        "elliptic": [ "ec" ],
        "scrypt-js": [ "scrypt", "syncScrypt" ],
      }
    })
  ]
}]
