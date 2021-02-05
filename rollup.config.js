import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
export default [{
  input: 'src/index.js',
  output: [{
    file: './index.js',
    format: 'cjs'
  }],
  plugins: [
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
