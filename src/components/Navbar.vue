<template>
  <header>
    <Collapsible>
      <nav id="nav">
        <h1>Feel Football</h1>

        <ul class="nav-list-items">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li >
            <router-link to="/leagues" @click="ClickedLeagues($event)">Leagues</router-link>
          </li>
          <li v-if="!getAuthenticity()">
            <router-link to="/form" >Signin</router-link>
          </li>
           <li v-if="getAuthenticity()">
            <router-link to="/profile" v-if="getAuthenticity">Profile</router-link>
          </li>
        </ul>
        <button @click="logOut" >LogOut</button>
      </nav>
    </Collapsible>
  </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Collapsible from "@/shared/collapsible.vue";
import { firebaseStore } from "@/store";
@Component({
  name: "Navbar",
  components: {
    Collapsible,
  },
})
export default class Navbar extends Vue {
  isAuthenticated = firebaseStore.user
  created(){
    firebaseStore.getUserOnChange()
  }
  getAuthenticity():boolean{
    this.isAuthenticated = firebaseStore.user
    return this.isAuthenticated != null
  }
  
  async logOut(){
    await firebaseStore.logOut()
    this.$router.push('/')
  }
  ClickedLeagues(e:Event):void{
    console.log('sad')
   
  }
}
</script>
<style>
#nav {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #343a40;
  color: #fff;
  width: 100%;
  height: 80px;
}
#nav > h1 {
  font-size: 30px;
  margin-left: 20px;
}
#nav > ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  height: 30px;
  align-content: center;
}
#nav > ul > li {
  display: flex;
  padding: 15px;
  justify-content: center;
  align-content: center;
  color: #fff;
}
#nav > ul > li :active {
  color: aquamarine;
}
#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
