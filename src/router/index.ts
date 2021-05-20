import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Form from "@/views/Form.vue";
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/leagues",
    name: "Leagues",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/Leagues.vue"),
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export { routes };
export default router;
