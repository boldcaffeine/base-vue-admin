import Vue from "vue";
import "normalize.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@/globalStyles/index.scss"; // global css

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons"; // icon
import "./permission"; // permission control
Vue.use(ElementUI);
Vue.config.productionTip = false;

// 仅在开发环境中使用 mock

if (process.env.NODE_ENV === "development") {
  import("../mock/mockService"); // 引入 mock 服务
  const { mockXHR } = require("../mock");
  mockXHR();
}

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
