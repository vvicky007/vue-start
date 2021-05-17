<template>
<div>
    <h3>Top Scorers</h3>
        <table v-if="stats">
            <tr>
              <th>
                Player
              </th>
              <th>
                Goal Scored
              </th>
              <th>
                Assists
              </th>
            </tr>
           <tr v-for="stat in stats"  :key = "stat.athlete.displayName">
              <td>
                {{stat.athlete.displayName}}
              </td>
              <td>
                {{stat.athlete.statistics[1].value}}
              </td>
              <td>
                {{stat.athlete.statistics[2].value}}
              </td>
           </tr>
        </table>
        </div>
</template>
<script lang="ts">
import ILeader from "@/interafces/stats";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Stats extends Vue {
  @Prop() private stats!: ILeader[];
}
</script>
<style scoped>
.stats tr:hover {
  background-color: #ddd;
}
td {
  width: 20% ;
  padding: 5px;
}
tr{
  border: 1px solid black;
}
</style>