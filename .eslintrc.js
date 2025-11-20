module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    'prettier/prettier': 'error',

    // Rules from CODING_STANDARDS.md
    'no-var': 'error', // [TS-NAMING-009]
    'no-console': 'warn', // [TS-LINT-001]
    'no-debugger': 'error', // [TS-LINT-003]
    'quotes': ['warn', 'single', { 'avoidEscape': true }], // [TS-STYLE-001]
    
    '@typescript-eslint/no-explicit-any': 'warn', // [TS-LINT-004]
    '@typescript-eslint/explicit-function-return-type': 'off', // Optional, can be 'warn' or 'error'
    
    // Comprehensive naming convention rule
    '@typescript-eslint/naming-convention': [
      'error',
      // Default: camelCase for variables, functions, and parameters
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      // Variables: camelCase, but allow UPPER_CASE for constants
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      // Constants (top-level) must be UPPER_SNAKE_CASE
      {
        selector: 'variable',
        modifiers: ['const', 'global'],
        format: ['UPPER_CASE'],
      },
      // Booleans must start with is/should/has/can/did/will
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      // Types (class, interface, typeAlias, enum) must be PascalCase
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      // Private members can have a leading underscore
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      // Ignore properties that require quotes (e.g., for headers)
      {
        selector: ['property', 'objectLiteralProperty'],
        format: null,
        modifiers: ['requiresQuotes'],
      }
    ],
  },
};