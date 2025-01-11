module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 10, // 单行属性最大数量
        multiline: 10, // 多行属性最大数量
      },
    ],
    "vue/first-attribute-linebreak": "off",
    // 忽略缩进规则
    "vue/html-indent": "off",
    // 忽略关闭括号换行规则
    "vue/html-closing-bracket-newline": "off",
  },
};
