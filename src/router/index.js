import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/dashboard/index"),
    hidden: true,
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
];
export const asyncRoutes = [];
export const constantRoutes = [];
export const resetRouter = function () {};
const router = new VueRouter({
  routes,
});

export default router;
