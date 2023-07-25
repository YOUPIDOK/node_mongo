module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'plugin:security/recommended', 'plugin:prettier/recommended'],
  plugins: ['jest', 'security', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'error',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'jest/expect-expect': 'off',
    'security/detect-object-injection': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.ts'],
      extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:prettier/recommended'],
      plugins: ['@typescript-eslint', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: ['./tsconfig.json'],
      },
      rules: {
        'no-console': 'error',
        'func-names': 'off',
        'no-underscore-dangle': 'off',
        'consistent-return': 'off',
      },
    },
  ],
};
