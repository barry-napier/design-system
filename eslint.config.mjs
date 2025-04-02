import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  eslint.configs.recommended,
  prettier,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Add custom rules here
    }
  },
  {
    files: ['**/*.{cjs,js}'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  }
]);
