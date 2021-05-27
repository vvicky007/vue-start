import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueGtag from "vue-gtag";
Vue.config.productionTip = false;
Vue.use(VueGtag, {
  config: { id: "G-JLP6JXJ3T5" },
  appName: 'Feel Football',
  pageTrackerScreenviewEnabled: true
}, router);
const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
//@ts-ignore
if (window.cypress) {
  //@ts-ignore
  window.__app__ = app;
}
