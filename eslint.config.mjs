import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ESLint configuration for Next.js
  compat.config({
    extends: [
      "next/core-web-vitals", // Use Next.js recommended rules
    ],
    rules: {
      // Add any custom rules here
    },
  }),
];

export default eslintConfig;
