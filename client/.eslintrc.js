module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 0,
    'import/extensions': 'off',
    'import/no-unresolved': 'off'
  },
  env: {
    browser: true,
    es6: true
  }
};
