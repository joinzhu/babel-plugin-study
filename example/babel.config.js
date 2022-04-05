module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      '../index.js',
      {
        isProd: process.env.NODE_ENV === 'production',
      },
    ],
  ],
}
