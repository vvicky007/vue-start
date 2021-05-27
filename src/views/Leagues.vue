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
  padding: 4px;
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
import { IStandings, URL } from "@/interafces/league-standings";
import { leaguesStore } from "@/store";
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
  selected: keyof URL = "PremierLeague";
  stats: Ileader[] = [];
  async created(): Promise<any> {
    await leaguesStore.loadLeagues(this.selected);
    this.standings = leaguesStore.Standings;
    await leaguesStore.loadStats(this.selected);
    this.stats = leaguesStore.Stats.splice(0, 20);
  }
  async loadStandings(league: keyof URL): Promise<any> {
    this.selected = league;
    await leaguesStore.loadLeagues(this.selected);
    this.standings = [...leaguesStore.standings];
    await leaguesStore.loadStats(this.selected);
    this.stats = leaguesStore.Stats.splice(0, 20);
  }
}
</script>
