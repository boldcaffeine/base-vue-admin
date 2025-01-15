module.exports = {
  root: true,
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-recommended", // Vue 3 推荐规则
    "eslint:recommended", // ESLint 推荐规则
    "plugin:prettier/recommended", // 启用 Prettier 规则
  ],
  plugins: ["vue", "prettier"], // 添加 prettier 插件
  rules: {
    "prettier/prettier": "off", // 禁用 prettier 格式化检查
    "vue/max-attributes-per-line": "off", // 禁用该规则
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-useless-escape": "off", // 禁用该规则
    "vue/no-deprecated-v-on-native-modifier": "off", // 禁用该规则
    "vue/multi-word-component-names": "off", // 禁用该规则
    "vue/no-deprecated-dollar-listeners-api": "off", // 禁用该规则
    "vue/no-deprecated-destroyed-lifecycle": "off", // 禁用该规则
    "vue/no-deprecated-v-bind-sync": "off", // 禁用该规则
    "vue/first-attribute-linebreak": "off",
    // 你可以根据需要在这里配置其他 ESLint 规则
  },
};
