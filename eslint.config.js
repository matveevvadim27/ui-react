import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    { ignores: ["dist", "node_modules"] },
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    {
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        ecmaVersion: 2022,
        globals: globals.browser,
        parserOptions: {
          project: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
      plugins: {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
      },
      settings: { react: { version: "detect" } },
    },
    eslintConfigPrettier
);