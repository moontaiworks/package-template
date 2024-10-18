// @ts-check
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";
import { configs as tsConfigs, config as typedConfig } from "typescript-eslint";

export default typedConfig(
  { ignores: ["node_modules", "dist", "build", "docs", "coverage"] },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-restricted-imports": [
        "error",
        { patterns: [{ regex: "^(node:)?fs" }] },
      ],
    },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        projectService: true,
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    extends: [
      ...tsConfigs.strictTypeChecked,
      ...tsConfigs.stylisticTypeChecked,
    ],
    files: ["**/*.ts"],
  },
  {
    extends: [perfectionist.configs["recommended-natural"]],
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            "type",
            "builtin",
            "external",
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "unknown",
          ],
          internalPattern: ["~/**", "@/**"],
        },
      ],
    },
  },
  eslintConfigPrettier,
);
