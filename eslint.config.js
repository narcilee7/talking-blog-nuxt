
import withNuxt from "./.nuxt/eslint.config.mjs";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default withNuxt([
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
      ecmaVersion: "latest",
      parser: tseslint.parser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"], // Vue3
  {
    files: ["app.vue", "error.vue", "pages/**/*.vue", "layouts/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
      camelcase: 2, 
      indent: [2, 2], 
      semi: [2, 'never'],
      quotes: ['error', 'single']
      'no-empty': 2,
      'no-extra-parens': 2
      'no-extra-semi': 2,
      'spaced-comment': ['error', 'always'] // 注释必须空格
    },
  },
  { ignores: [".nuxt/"] },
]);

