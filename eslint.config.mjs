import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-console": "warn",
      "no-debugger": "warn",
      "react/no-unescaped-entities": "off",
      "react/jsx-key": "warn",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-no-duplicate-props": "warn",
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
