import { shallowMount, Wrapper,createLocalVue } from "@vue/test-utils";
import sinon from "sinon";
import * as leagues_api from "@/api/leagues";
import * as stats_api from "@/api/stats";
import Vuex from "vuex";
import { IStandings } from '@/interafces/league-standings'
import Leagues from "@/views/Leagues.vue";
import mockData from "../mockdata/leagues";
import statsData from "../mockdata/stats";
import stats from "@/interafces/stats";
let localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store({
  modules:{
    leagues:{
      namespaced:true,
      actions:{
        loadLeagues: jest.fn(),
        loadStats: jest.fn(),
      },
      mutations:{
        setStats:jest.fn(),
        setLeagues:jest.fn(),
      }
    }
  },
  
})
describe("Home.vue", () => {
  let wrapper: Wrapper<Leagues>, stub:sinon.SinonStub<[url: string], Promise<IStandings[]>>,statsStub: sinon.SinonStub<[url: string], Promise<stats[]>>
  beforeEach(() => {
    stub = sinon.stub(leagues_api, "getStandings");
    stub.returns(Promise.resolve(mockData));
    statsStub = sinon.stub(stats_api, "getStats");
    statsStub.returns(Promise.resolve(statsData));
    wrapper = shallowMount(Leagues);
  });
  afterEach(() => {
    sinon.restore();
  });
  it("Home Component render, call api as the component gets created", async () => {
        expect(wrapper.vm.$data.selected).toEqual('PremierLeague')
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.$data.standings).toEqual(mockData)
        expect(stub.calledOnce).toBe(true)
        console.log(stub.calledOnce)
        await wrapper.vm.$nextTick()
        console.log("called",statsData)
        await wrapper.vm.$nextTick()
        console.log("stats is ",wrapper.vm.$data.stats)
        console.log("called",statsData)
        await wrapper.vm.$nextTick()
        // expect(wrapper.vm.$data.stats).toEqual(statsData)
       
  });
  it('On button click should select a league',async ()=>{
    const but = wrapper.findAll(".button");
    await but.at(0).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.selected).toEqual('PremierLeague')
    await but.at(1).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.selected).toEqual('Laliga')
    await but.at(2).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.selected).toEqual('Ligue1')
  })
  
});
