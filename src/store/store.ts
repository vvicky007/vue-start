import Vue from "vue";
import Vuex from "vuex";
import { userModule } from "@/store/message";
Vue.use(Vuex);
const url = "http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news";
const store = new Vuex.Store({
  modules: {},
});
export default store;
