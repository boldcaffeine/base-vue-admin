const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          quietDeps: true, // 忽略依赖中的 SASS 警告
        },
      },
    },
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    // 处理 SVG 文件
    config.module
      .rule("svg")
      .exclude.add(path.resolve("src/icons")) // 排除图标文件夹，防止默认的 vue-svg-loader 加载
      .end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(path.resolve("src/icons")) // 指定存放 SVG 图标的目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]", // 图标的 id 格式
      })
      .end();
  },
});
