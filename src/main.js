import Vue from "vue";
import "normalize.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/element-variables.scss";

import "@/globalStyles/index.scss"; // global css

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons"; // icon
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
