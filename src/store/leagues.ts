import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { getStandings } from "@/api/leagues";
import { getStats } from "@/api/stats";
import { IStandings, URL } from "@/interafces/league-standings";
import Ileader from "@/interafces/stats";
import store from "@/store";

@Module({ name: "leagues", namespaced: true, stateFactory: true })
export default class LeaguesModule extends VuexModule {
  // state
  standings: IStandings[] = [];
  stats: Ileader[] = [];
  url: URL = {
    PremierLeague:
      "https://site.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
    Laliga: "https://site.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
    Ligue1: "https://site.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
    Bundesliga:
      "https://site.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
    SerieA: "https://site.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
  };
  stats_url: URL = {
    PremierLeague:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/statistics",
    Laliga:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/statistics",
    Ligue1:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/statistics",
    Bundesliga:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/statistics",
    SerieA:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/statistics",
  };
  // mutations
  @Mutation
  setLeagues(standings: IStandings[]) {
    this.standings = standings;
  }
  get Standings(): IStandings[] {
    return this.standings;
  }
  get Stats(): Ileader[] {
    return this.stats;
  }
  // actions
  @Action({ commit: "setLeagues" })
  async loadLeagues(key: keyof URL) {
    const standings: IStandings[] = await getStandings(this.url[key]);
    return standings;
  }
  @Mutation
  setStats(stats: Ileader[]) {
    this.stats = stats;
  }
  @Action({ commit: "setStats" })
  async loadStats(key: keyof URL) {
    const stats: Ileader[] = await getStats(this.stats_url[key]);
    return stats;
  }
}
