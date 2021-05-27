import { shallowMount, Wrapper, createLocalVue, mount } from "@vue/test-utils";
import sinon, { SinonSandbox } from "sinon";
import * as leagues_api from "@/api/leagues";
import * as stats_api from "@/api/stats";
import Vuex from "vuex";
import statsData from "../mockdata/stats_mock";
import Leagues from "@/views/Leagues.vue";
import mockData from "../mockdata/leagues";
import stats from "@/interafces/stats";
const m = [...statsData];
const x = statsData;
const localVue = createLocalVue();
function flushQueue() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}
localVue.use(Vuex);
const getters = {
  loadLeagues: jest.fn(),
};
const actions = {
  loadLeagues: jest.fn(),
};
const store = new Vuex.Store({
  modules: {
    leagues: {
      actions,
      getters,
    },
  },
});
describe("Home.vue", () => {
  let wrapper: Wrapper<Leagues>, stub, statsStub;
  beforeEach(async () => {
    stub = sinon.stub(leagues_api, "getStandings");
    stub.returns(Promise.resolve(mockData));
    statsStub = sinon.stub(stats_api, "getStats");
    statsStub.resolves(statsData);
    wrapper = shallowMount(Leagues, { localVue, store });
  });
  afterEach(() => {
    sinon.restore();
  });
  it("Home Component render, call api as the component gets created", async () => {
    await wrapper.vm.$nextTick();
    wrapper.vm.$store.dispatch = jest.fn();
    expect(wrapper.vm.$data.selected).toEqual("PremierLeague");
    expect(wrapper.vm.$data.standings).toEqual(mockData);
    await flushQueue();
    expect(wrapper.vm.$data.stats).not.toBeUndefined;
    expect(wrapper.vm.$data.stats).toEqual(m);
    console.log(wrapper.vm.$store.state.leagues);
    // expect(getters.loadLeagues).toBeCalled()
  });
  it("On button click should select a league", async () => {
    const but = wrapper.findAll(".button");
    await but.at(0).trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.selected).toEqual("PremierLeague");
    await but.at(1).trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.selected).toEqual("Laliga");
    await but.at(2).trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.selected).toEqual("Ligue1");
  });
});
