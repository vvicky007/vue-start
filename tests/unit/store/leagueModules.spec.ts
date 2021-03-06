import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import { IStandings, URL } from "@/interafces/league-standings";
import IStats from "@/interafces/stats";
import { leaguesStore } from "@/store";
import sinon from "sinon";
import Vuex from "vuex";
import * as leagues_api from "@/api/leagues";
import * as stats_api from "@/api/stats";
import mockData from "../../mockdata/leagues";
import statsData from "../../mockdata/stats_mock";
const Vue = createLocalVue();
Vue.use(Vuex);
const url: URL = {
  PremierLeague:
    "https://site.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
  Laliga: "https://site.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
  Ligue1: "https://site.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
  Bundesliga: "https://site.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
  SerieA: "https://site.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
};
const stats_url: URL = {
  PremierLeague:
    "http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/statistics",
  Laliga:
    "http://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/statistics",
  Ligue1:
    "http://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/statistics",
  Bundesliga:
    "http://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/statistics",
  SerieA:
    "http://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/statistics",
};
describe("News module", () => {
  let stub, expectedUrl: string[], statsStub;
  afterEach(() => {
    sinon.restore();
  });
  beforeEach(() => {
    stub = sinon.stub(leagues_api, "getStandings");
    stub.returns(Promise.resolve(mockData));
    statsStub = sinon.stub(stats_api, "getStats");
    statsStub.returns(Promise.resolve(statsData));
  });
  it("Initial State Check", () => {
    expect(leaguesStore.standings).toHaveLength(0);
    expect(leaguesStore.standings).toEqual([]);
    expect(leaguesStore.stats).toHaveLength(0);
    expect(leaguesStore.stats).toEqual([]);

    expect(leaguesStore.url).toEqual(url);
    expect(leaguesStore.stats_url).toEqual(stats_url);
  });
  it("load leagues action should work", async () => {
    await leaguesStore.loadLeagues("PremierLeague");
    expect(leaguesStore.standings).toEqual(mockData);
  });
  it("mutation setStandings should Work", () => {
    const testData: IStandings[] = [];
    leaguesStore.setLeagues(testData);
    expect(leaguesStore.standings).toEqual(testData);
  });
  it("load News action Should work", async () => {
    await leaguesStore.loadStats("PremierLeague");
    expect(leaguesStore.stats).toEqual(statsData);
  });
  it("mutation setStats should Work", () => {
    const testData: IStats[] = [];
    leaguesStore.setStats(testData);
    expect(leaguesStore.stats).toEqual(testData);
  });
});
