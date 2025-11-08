import tseslint from "@typescript-eslint/eslint-plugin";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import { importX } from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

const tsResolver = createTypeScriptImportResolver({
  project: ["./tsconfig.json", "./tsconfig.build.json"],
  noWarnOnMultipleProjects: true,
});

export default [
  {
    ignores: ["**/*.js", "node_modules", ".aws-sam"],
  },
  ...tseslint.configs["flat/recommended"],
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    settings: {
      "import-x/resolver-next": [tsResolver],
    },
  },
  prettierRecommended,
];
