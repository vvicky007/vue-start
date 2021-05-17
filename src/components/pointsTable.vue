<template>
     <div class="leaguetable">
      <table>
        <tr>
            <th>Team</th>
            <th>Matches Played</th>
            <th>Points</th>
            <th>Won</th>
            <th>Lost</th>
        </tr>
       
        <tr v-for="standing in standings" :key="standing.team.id">
            <td>
              <div class="standing">
                <img :src = "standing.team.logos[0].href" alt="logo" class="logo" />
                {{standing.team.name}}
              </div>
            </td>
            <td>
              {{standing.stats[3].value}}
            </td>
            <td>
              {{standing.stats[6].value}}
            </td>
            <td>
              {{standing.stats[6].value}}
            </td>
            <td>
              {{standing.stats[6].value}}
            </td>
        </tr>
        <br />
      </table>
      </div>
</template>
<script lang="ts">
import IStandings from "@/interafces/league-standings";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class PointsTable extends Vue {
  @Prop() private msg!: string;
  @Prop() private standings!: IStandings[];
}
</script>
<style scoped> 
.leaguetable tr:hover {
  background-color: #ddd;
}
.logo{
  width:5%;
  height: 5%;
}

.leaguetable{
  flex-basis: 70%;
}
td {
  width: 20% ;
  padding: 5px;
}
tr{
  border: 1px solid black;
}
.standing{
  display: flex;
  flex-direction: row;
  width: 140%;
  padding: 5px;
} 
</style>