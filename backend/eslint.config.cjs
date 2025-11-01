// eslint.config.cjs
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  // Ignore patterns
  {
    ignores: ["node_modules/", "dist/", "build/"]
  },
  
  // JavaScript files config
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  
  // TypeScript files config
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json'
      },
      globals: {
        ...globals.node
      }
    },
    plugins: {
      "@typescript-eslint": require('@typescript-eslint/eslint-plugin')
    },
    rules: {
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn"
    }
  }
];