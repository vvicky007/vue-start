<template>
  <div class="leagues">
    <nav class="navbar">
      <ul>
        <li>
          <button
            class="button"
            @click="loadStandings($event.target.value)"
            value="PremierLeague"
          >
            Premier League
          </button>
        </li>
        <li>
          <button
            class="button"
            value="Laliga"
            @click="loadStandings($event.target.value)"
          >
            Laliga
          </button>
        </li>
        <li>
          <button
            class="button"
            value="Ligue1"
            @click="loadStandings($event.target.value)"
          >
            Ligue1
          </button>
        </li>
        <li>
          <button
            class="button"
            value="Bundesliga"
            @click="loadStandings($event.target.value)"
          >
            Bundesliga
          </button>
        </li>
        <li>
          <button
            class="button"
            value="SerieA"
            @click="loadStandings($event.target.value)"
          >
            Serie A
          </button>
        </li>
      </ul>
    </nav>
    <div class="leaguepanel" v-if="standings.length != 0">
      <PointsTable :standings="standings" />
      <div class="stats">
        <Stats :stats="stats" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.leagues {
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 80%;
}
.navbar {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  flex-wrap: wrap;
}
.navbar > ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
.navbar > ul > li {
  display: flex;
  justify-self: center;
  align-self: center;
  padding: 8px;
}
.button {
  background-color: #42b983;
  border-radius: 10px;
  color: #000;
  box-shadow: 10px 5px 5px black;
}

.leaguepanel {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { leaguesModule } from "@/store/leagues";
import { IStandings } from "@/interafces/league-standings";
import PointsTable from "@/components/pointsTable.vue";
import Stats from "@/components/Stats.vue";
import Ileader from "@/interafces/stats";
@Component({
  name: "Leagues",
  components: {
    PointsTable,
    Stats,
  },
})
export default class Leagues extends Vue {
  standings: IStandings[] = [];
  selected = "PremierLeague";
  stats: Ileader[] = [];
  async created(): Promise<any> {
    await leaguesModule.loadLeagues(this.selected);
    this.standings = leaguesModule.standings;
    await leaguesModule.loadStats(this.selected);
    this.stats = leaguesModule.stats.splice(0, 20)
    
  }
  async loadStandings(league: string): Promise<any> {
    this.selected = league;
    await leaguesModule.loadLeagues(this.selected.trim());
    this.standings = leaguesModule.standings;
    await leaguesModule.loadStats(this.selected.trim());
    this.stats = leaguesModule.stats.splice(0, 20);
  }
}
</script>
