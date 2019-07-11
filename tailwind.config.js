// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#2366ce',
      'green': '#41b883'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#2366ce'
    })
  },
  variants: {},
  plugins: []
};
