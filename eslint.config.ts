import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortKeys from "eslint-plugin-sort-keys-fix";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  // Base ESLint recommended config
  js.configs.recommended,

  // TypeScript ESLint configs
  ...tseslint.configs.recommended,

  // Prettier config (must be last to override other configs)
  prettier,

  // Main config object
  {
    ignores: ["dist", "node_modules"],
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "jsx-a11y": jsxA11y,
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
      "sort-keys-fix": sortKeys,
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],

      // React rules
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/function-component-definition": [2, { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }],
      "react/jsx-no-useless-fragment": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-unused-prop-types": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",

      // Import rules
      "import/no-extraneous-dependencies": "off",
      "import/order": "off",
      "import/prefer-default-export": "off",

      // Code style rules
      "arrow-body-style": ["warn", "as-needed"],
      "no-empty": "off",
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      semi: ["error", "always"],

      // Import sorting
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            // Side effect imports
            ["^\\u0000"],
            // Packages and anything not matched in another group
            ["^"],
            // Relative imports
            ["^\\."],
          ],
        },
      ],
      "sort-keys-fix/sort-keys-fix": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
