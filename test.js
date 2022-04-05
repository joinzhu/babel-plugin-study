const { transformSync } = require('@babel/core')
const myPlugin = require('./index')

const code = `
if (DEBUG) {
  const a = 1;
  const b = 2;
  console.warn(a + b);
}
`
const babelConfig = {
  plugins: [
    [
      './index.js',
      {
        isDev: process.env.NODE_ENV,
      },
    ],
  ],
}

const output = transformSync(code, babelConfig)

console.warn(output.code)
