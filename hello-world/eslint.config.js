import tseslint from "@typescript-eslint/eslint-plugin";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: ["**/*.js", "node_modules", ".aws-sam"] 
  },
  ...tseslint.configs["flat/recommended"],
  prettierRecommended,
];
