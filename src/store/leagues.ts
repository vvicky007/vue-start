import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import { getStandings } from "@/api/leagues";
import { getStats } from "@/api/stats";
import { IStandings, URL } from "@/interafces/league-standings";
import Ileader from "@/interafces/stats";

@Module()
class LeaguesModule extends VuexModule {
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
  // mutations
  @Mutation
  setLeagues(standings: IStandings[]) {
    this.standings = standings;
  }

  // actions
  @Action
  async loadLeagues(key: keyof URL) {
    const standings: IStandings[] = await getStandings(this.url[key]);
    this.setLeagues(standings);
  }
  @Mutation
  setStats(stats: Ileader[]) {
    this.stats = stats;
  }
  @Action
  async loadStats(key: keyof URL) {
    const stats: Ileader[] = await getStats(this.stats_url[key]);
    this.setStats(stats);
  }
}

// register module (could be in any file)
import store from "@/store/store";
export const leaguesModule: any = new LeaguesModule({ store, name: "leagues" });
// export default UserModule
