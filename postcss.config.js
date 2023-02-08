module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    autoprefixer: {
      overrideBrowserslist: ['Android >= 5', 'iOS 10.3', 'Chrome > 31', 'ff > 31', 'not IE 11', '> 1%'],
      grid: true
    }
  }
}
